import process from "node:process";

import type { Linter } from "eslint";

import { ignores, imports, javascript, typescript } from "./configs";
import type { Awaitable, IConfigOptions } from "./types";
import { isDepExist } from "./utils";

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
    typescript: enableTypeScript = isDepExist('typescript'),
  } = options ?? {};

  const configs: Awaitable<Linter.FlatConfig[]> = [
    ...ignores(),
    ...javascript({
      overrides: getOverrides(options, "javascript"),
    }),
    ...imports({isInEditor})
  ];

  if(enableTypeScript) {
    configs.push(...typescript())
  }



  return configs;
};

// utils for factory
export type ResolvedOptions<T> = T extends boolean ? never : NonNullable<T>;

function resolveSubOptions<K extends keyof IConfigOptions>(
  options: IConfigOptions = {},
  key: K
): ResolvedOptions<IConfigOptions[K]> {
  return typeof options[key] === "boolean" ? ({} as any) : options[key] || {};
}

function getOverrides<K extends keyof IConfigOptions>(
  options: IConfigOptions = {},
  key: K
) {
  const sub = resolveSubOptions(options, key);
  return {
    ...("overrides" in sub ? (sub.overrides as object) : {}),
  };
}
