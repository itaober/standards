import process from 'node:process';

import type { Linter } from 'eslint';

import { ignores, imports, javascript, prettier, react, typescript } from './configs';
import { GLOB_VUE } from './globs';
import type { IConfigOptions } from './types';
import { getOverrides, isPackageExisted, resolveSubOptions } from './utils';

const VuePackages = ['vue', 'nuxt', 'vitepress'];

export const factory = (options?: IConfigOptions): Linter.FlatConfig[] => {
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
    react: enableReact = isPackageExisted('react'),
  } = options ?? {};

  const enableVue = VuePackages.some(i => isPackageExisted(i));

  const typescriptOptions = resolveSubOptions(options, 'typescript');
  const tsconfigPath =
    'tsconfigPath' in typescriptOptions ? typescriptOptions.tsconfigPath : undefined;

  const configs: Linter.FlatConfig[] = [
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

  if (enableReact) {
    configs.push(
      ...react({
        ...resolveSubOptions(options, 'react'),
        tsconfigPath,
      }),
    );
  }

  // As the last item to override other configs
  if (enablePrettier) {
    configs.push(...prettier());
  }

  return configs;
};
