import type { Linter } from 'eslint';

export type ResolvedOptions<T> = T extends boolean ? never : NonNullable<T>;

/** A flat config item. */
export type FlatConfigItem = Linter.Config<Linter.RulesRecord>;

export interface IIsInEditor {
  /**
   * Control to disable some rules in editors.
   *
   * @default auto-detect based on the process.env
   */
  isInEditor?: boolean;
}

/** Options for overriding rules in a config. */
export interface IOverrides {
  overrides?: Linter.Config['rules'];
}

export interface ICustomFileGlobs {
  /**
   * Custom globs the `files` option.
   *
   * @example
   *   {undefined}
   *   '**\/*.vue';
   */
  files?: string[];
}

export interface ITypeScriptWithTsconfigPath {
  /**
   * When this options is provided, type aware rules will be enabled.
   *
   * @see https://typescript-eslint.io/linting/typed-linting/
   */
  tsconfigPath?: string | string[];
}

export interface ITypeScriptParserOptions {
  /** Additional parser options for TypeScript. */
  parserOptions?: Partial<Linter.ParserOptions>;

  /**
   * Glob patterns for files that should be type aware.
   *
   * @default `['**\/*.{ts,tsx}']`
   */
  filesTypeAware?: string[];

  /**
   * Glob patterns for files that should not be type aware.
   *
   * @default `['**\/*.md\/**', '**\/*.astro/*.ts']`
   */
  ignoresTypeAware?: string[];
}

export interface IConfigOptions extends Linter.Config {
  /**
   * Control to disable some rules in editors.
   *
   * @default auto-detect based on the process.env
   */
  isInEditor?: boolean;
  /** Core rules. Can't be disabled. */
  javascript?: IOverrides;
  /**
   * Enable TypeScript support.
   *
   * Passing an object to enable TypeScript Language Server support.
   *
   * @default auto-detect based on the dependencies `typescript`
   */
  typescript?:
    | boolean
    | (IOverrides & ICustomFileGlobs & (ITypeScriptWithTsconfigPath | ITypeScriptParserOptions));
  /**
   * Enable React rules.
   *
   * @default auto-detect based on the dependencies `react`
   */
  react?: boolean | (IOverrides & ICustomFileGlobs);
  /**
   * Enable imports rules.
   *
   * @default true
   * @see https://github.com/un-ts/eslint-plugin-import-x
   * @see https://github.com/lydell/eslint-plugin-simple-import-sort
   * @see https://github.com/sweepline/eslint-plugin-unused-imports
   */
  imports?: boolean;
  /**
   * Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.
   *
   * @default auto-detect based on the dependencies `prettier`
   */
  prettier?: boolean;
}
