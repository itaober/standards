import process from 'node:process';

import type { Linter } from 'eslint';

import { ignores, imports, javascript, prettier, typescript } from './configs';
import { GLOB_VUE } from './globs';
import type { Awaitable, IConfigOptions, ResolvedOptions } from './types';
import { isPackageExisted } from './utils';

//
const VuePackages = ['vue', 'nuxt', 'vitepress'];

export const factory = (options?: IConfigOptions): Awaitable<Linter.FlatConfig[]> => {
  const {
    isInEditor = !!(
      (process.env.VSCODE_PID ||
        process.env.VSCODE_CWD ||
        process.env.JETBRAINS_IDE ||
        process.env.VIM ||
        process.env.NVIM) &&
      !process.env.CI
    ),
    typescript: enableTypeScript = isPackageExisted('typescript'),
    prettier: enablePrettier = isPackageExisted('prettier'),
  } = options ?? {};

  const enableVue = VuePackages.some(i => isPackageExisted(i));

  const configs: Awaitable<Linter.FlatConfig[]> = [
    ...ignores(),
    ...javascript({
      overrides: getOverrides(options, 'javascript'),
    }),
    ...imports({ isInEditor }),
  ];

  if (enableTypeScript) {
    const tsOptions = resolveSubOptions(options, 'typescript');
    configs.push(
      ...typescript({
        ...tsOptions,
        files: [...(tsOptions?.files ?? []), ...(enableVue ? [GLOB_VUE] : [])],
      }),
    );
  }

  // As the last item to override other configs
  if (enablePrettier) {
    configs.push(...prettier());
  }

  return configs;
};

// utils for factory
function resolveSubOptions<K extends keyof IConfigOptions>(
  options: IConfigOptions = {},
  key: K,
): ResolvedOptions<IConfigOptions[K]> {
  return typeof options[key] === 'boolean' ? ({} as any) : options[key] || {};
}

function getOverrides<K extends keyof IConfigOptions>(options: IConfigOptions = {}, key: K) {
  const sub = resolveSubOptions(options, key);
  return {
    ...('overrides' in sub ? (sub.overrides as object) : {}),
  };
}
