import type { Linter } from 'eslint';

import { pluginImportX, pluginSimpleImportSort, pluginUnusedImports } from '../plugins';
import type { IIsInEditor } from '../types';

export const imports = (options?: IIsInEditor): Linter.FlatConfig[] => {
  const { isInEditor = false } = options ?? {};

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

        'unused-imports/no-unused-imports': isInEditor ? 'off' : 'error',
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
