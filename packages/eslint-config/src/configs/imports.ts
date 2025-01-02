import type { Linter } from 'eslint';
import * as pluginImportX from 'eslint-plugin-import-x';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginUnusedImports from 'eslint-plugin-unused-imports';

export const getImportsConfig = (): Linter.Config[] => {
  return [
    {
      name: 'itaober/imports/rules',
      plugins: {
        'simple-import-sort': pluginSimpleImportSort,
        import: pluginImportX as any,
        'unused-imports': pluginUnusedImports,
      },
      rules: {
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',

        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',
        'import/no-self-import': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/order': 'error',

        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': [
          'error',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            vars: 'all',
            varsIgnorePattern: '^_',
          },
        ],
      },
    },
  ];
};
