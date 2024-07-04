import type { Linter } from "eslint"

import { GLOB_ASTRO_TS, GLOB_MARKDOWN, GLOB_TS, GLOB_TSX } from "../globs"
import { parserTs, pluginTs } from "../plugins"
import type { IConfigOptions, ITypeScriptParserOptions, ITypeScriptWithTsconfigPath, ResolvedOptions } from "../types"
import { renameRules, toArray } from "../utils"

export const typescript = (options: ResolvedOptions<IConfigOptions['typescript'] & ITypeScriptParserOptions & ITypeScriptWithTsconfigPath> = {}): Linter.FlatConfig[] => {
  const { overrides, files: customFiles = [] } = options

  const files = [GLOB_TS, GLOB_TSX, ...customFiles]

  const filesTypeAware = options.filesTypeAware ?? [GLOB_TS, GLOB_TSX]
  const ignoresTypeAware = options.ignoresTypeAware ?? [
    `${GLOB_MARKDOWN}/**`,
    GLOB_ASTRO_TS,
  ]
  const tsconfigPath = options?.tsconfigPath ? toArray(options.tsconfigPath)
    : undefined
  const isTypeAware = !!tsconfigPath

  const typeAwareRules: Linter.FlatConfig['rules'] = {
    'dot-notation': 'off',
    'no-implied-eval': 'off',
    'no-throw-literal': 'off',
    'ts/await-thenable': 'error',
    'ts/dot-notation': ['error', { allowKeywords: true }],
    'ts/no-floating-promises': 'error',
    'ts/no-for-in-array': 'error',
    'ts/no-implied-eval': 'error',
    'ts/no-misused-promises': 'error',
    'ts/no-throw-literal': 'error',
    'ts/no-unnecessary-type-assertion': 'error',
    'ts/no-unsafe-argument': 'error',
    'ts/no-unsafe-assignment': 'error',
    'ts/no-unsafe-call': 'error',
    'ts/no-unsafe-member-access': 'error',
    'ts/no-unsafe-return': 'error',
    'ts/promise-function-async': 'error',
    'ts/restrict-plus-operands': 'error',
    'ts/restrict-template-expressions': 'error',
    'ts/return-await': ['error', 'in-try-catch'],
    'ts/strict-boolean-expressions': ['error', { allowNullableBoolean: true, allowNullableObject: true }],
    'ts/switch-exhaustiveness-check': 'error',
    'ts/unbound-method': 'error',
  }


  function makeParser(typeAware: boolean, files: string[], ignores?: string[]): Linter.FlatConfig {
    return {
      files,
      ...ignores ? { ignores } : {},
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          extraFileExtensions: customFiles.map(glob => glob.split('.').pop()),
          sourceType: 'module',
          ...typeAware
            ? {
              project: tsconfigPath,
              tsconfigRootDir: process.cwd(),
            }
            : {},
          ...(options?.parserOptions || {}),
        },
      },
      name: `itaober/typescript/${typeAware ? 'type-aware-parser' : 'parser'}`,
    }
  }

  return [
    {
      name: 'itaober/typescript/setup',
      plugins: {
        ts: pluginTs as any
      }
    },
    {
      name: 'itaober/typescript/parser',
      files,
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          sourceType: 'module',
          ecmaFeatures: {
            jsx: true
          }
        }
      },
    },
    // assign type-aware parser for type-aware files and type-unaware parser for the rest
    ...isTypeAware
      ? [
        makeParser(true, filesTypeAware, ignoresTypeAware),
        makeParser(false, files, filesTypeAware),
      ]
      : [
        makeParser(false, files),
      ],
    {
      name: 'itaober/typescript/rules',
      files,
      rules: {
        ...renameRules(
          pluginTs.configs['eslint-recommended'].overrides![0].rules!,
          { '@typescript-eslint': 'ts' },
        ),
        ...renameRules(
          pluginTs.configs.strict.rules!,
          { '@typescript-eslint': 'ts' },
        ),
        'no-dupe-class-members': 'off',
        'no-loss-of-precision': 'off',
        'no-redeclare': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        'ts/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        'ts/ban-types': ['error', { types: { Function: false } }],
        'ts/consistent-type-definitions': ['error', 'interface'],
        'ts/consistent-type-imports': ['error', { disallowTypeAnnotations: false, prefer: 'type-imports' }],
        'ts/method-signature-style': ['error', 'property'], // https://www.totaltypescript.com/method-shorthand-syntax-considered-harmful
        'ts/no-dupe-class-members': 'error',
        'ts/no-dynamic-delete': 'off',
        'ts/no-explicit-any': 'off',
        'ts/no-extraneous-class': 'off',
        'ts/no-import-type-side-effects': 'error',
        'ts/no-invalid-void-type': 'off',
        'ts/no-loss-of-precision': 'error',
        'ts/no-non-null-assertion': 'off',
        'ts/no-redeclare': 'error',
        'ts/no-require-imports': 'error',
        'ts/no-unused-vars': 'off',
        'ts/no-use-before-define': ['error', { classes: false, functions: false, variables: true }],
        'ts/no-useless-constructor': 'off',
        'ts/prefer-ts-expect-error': 'error',
        'ts/triple-slash-reference': 'off',
        'ts/unified-signatures': 'off',

        ...overrides,
      }
    },
    ...isTypeAware
      ? [{
        files: filesTypeAware,
        ignores: ignoresTypeAware,
        name: 'antfu/typescript/rules-type-aware',
        rules: typeAwareRules,
      }]
      : [],
    {
      name: 'itaober/typescript/disables/dts',
      files: ['**/*.d.?([cm])ts'],
      rules: {
        'eslint-comments/no-unlimited-disable': 'off',
        'import/no-duplicates': 'off',
        'no-restricted-syntax': 'off',
        'unused-imports/no-unused-vars': 'off',
      },
    },
    {
      name: 'itaober/typescript/disables/test',
      files: ['**/*.{test,spec}.ts?(x)'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
    {
      name: 'itaober/typescript/disables/cjs',
      files: ['**/*.js', '**/*.cjs'],
      rules: {
        'ts/no-require-imports': 'off',
        'ts/no-var-requires': 'off',
      },
    },
  ]
}