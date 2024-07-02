import type { Linter } from "eslint"

import { GLOB_TS, GLOB_TSX } from "../globs"
import { parserTs, pluginTs } from "../plugins"
import { renameRules } from "../utils"

export const typescript =  (): Linter.FlatConfig[] => {
  // const typeAwareRules: Linter.FlatConfig['rules'] = {
  //   'dot-notation': 'off',
  //   'no-implied-eval': 'off',
  //   'no-throw-literal': 'off',
  //   'ts/await-thenable': 'error',
  //   'ts/dot-notation': ['error', { allowKeywords: true }],
  //   'ts/no-floating-promises': 'error',
  //   'ts/no-for-in-array': 'error',
  //   'ts/no-implied-eval': 'error',
  //   'ts/no-misused-promises': 'error',
  //   'ts/no-throw-literal': 'error',
  //   'ts/no-unnecessary-type-assertion': 'error',
  //   'ts/no-unsafe-argument': 'error',
  //   'ts/no-unsafe-assignment': 'error',
  //   'ts/no-unsafe-call': 'error',
  //   'ts/no-unsafe-member-access': 'error',
  //   'ts/no-unsafe-return': 'error',
  //   'ts/promise-function-async': 'error',
  //   'ts/restrict-plus-operands': 'error',
  //   'ts/restrict-template-expressions': 'error',
  //   'ts/return-await': ['error', 'in-try-catch'],
  //   'ts/strict-boolean-expressions': ['error', { allowNullableBoolean: true, allowNullableObject: true }],
  //   'ts/switch-exhaustiveness-check': 'error',
  //   'ts/unbound-method': 'error',
  // }

  return [
    {
      name: 'itaober/typescript/setup',
      plugins: {
        ts: pluginTs as any
      }
    },
    {
       name: 'itaober/typescript/parser',
      files: [GLOB_TS, GLOB_TSX],
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
    {
      name: 'itaober/typescript/rules',
      files: [GLOB_TS, GLOB_TSX],
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
        // ...overrides,
      }
    }
  ]
}