import type { ParserOptions } from "@typescript-eslint/parser";
import type { Linter } from "eslint";

export type Awaitable<T> = T | Promise<T>;

/**
 * A flat config item.
 */
export type FlatConfigItem = Linter.FlatConfig<Linter.RulesRecord>;

export interface IIsInEditor {
  /**
   * Control to disable some rules in editors.
   * @default auto-detect based on the process.env
   */
  isInEditor?: boolean;
}

/**
 * Options for overriding rules in a config.
 */
export interface IOverrides {
  overrides?: Linter.FlatConfig["rules"];
}

export interface ITypeScriptWithTsconfigPath {
  /**
   * When this options is provided, type aware rules will be enabled.
   * @see https://typescript-eslint.io/linting/typed-linting/
   */
  tsconfigPath?: string | string[];
}

export interface ITypeScriptParserOptions {
  /**
   * Additional parser options for TypeScript.
   */
  parserOptions?: Partial<ParserOptions>;

  /**
   * Glob patterns for files that should be type aware.
   * @default ['**\/*.{ts,tsx}']
   */
  filesTypeAware?: string[];

  /**
   * Glob patterns for files that should not be type aware.
   * @default ['**\/*.md\/**', '**\/*.astro/*.ts']
   */
  ignoresTypeAware?: string[];
}

export interface IConfigOptions extends Linter.FlatConfig {
  /**
   * Control to disable some rules in editors.
   * @default auto-detect based on the process.env
   */
  isInEditor?: boolean;
  /**
   * Core rules. Can't be disabled.
   */
  javascript?: IOverrides;
  /**
   * Enable TypeScript support.
   *
   * Passing an object to enable TypeScript Language Server support.
   *
   * @default auto-detect based on the dependencies
   */
  typescript?:
    | boolean
    | (IOverrides & (ITypeScriptWithTsconfigPath | ITypeScriptParserOptions));
}
