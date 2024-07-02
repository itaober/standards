// import process from "node:process";
import type { Linter } from "eslint";
import type { IConfigOptions } from "./types";
import { ignores, javascript } from "./configs";

export const factory = (options?: IConfigOptions): Linter.FlatConfig[] => {
  // const {
  //   isInEditor = !!(
  //     (process.env.VSCODE_PID ||
  //       process.env.VSCODE_CWD ||
  //       process.env.JETBRAINS_IDE ||
  //       process.env.VIM ||
  //       process.env.NVIM) &&
  //     !process.env.CI
  //   ),
  //   typescript: enableTypeScript,
  // } = options ?? {};

  const configs: Linter.FlatConfig[] = [
    ...ignores(),
    ...javascript({
      overrides: getOverrides(options, "javascript"),
    }),
  ];

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
