import type { Linter } from 'eslint';

import { GLOB_SRC_EXT } from '../globs';
import { importXPlugin, simpleImportSortPlugin, unusedImportsPlugin } from '../plugins';
import type { IIsInEditor } from '../types';

export const imports = (options?: IIsInEditor): Linter.FlatConfig[] => {
  const { isInEditor = false } = options ?? {};

  return [
    {
      name: 'itaober/imports/rules',
      plugins: {
        'simple-import-sort': simpleImportSortPlugin,
        import: importXPlugin as any,
        'unused-imports': unusedImportsPlugin,
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
    {
      name: 'itaober/imports/disables/bin',
      files: ['**/bin/**/*', `**/bin.${GLOB_SRC_EXT}`],
      rules: {
        'antfu/no-import-dist': 'off',
        'antfu/no-import-node-modules-by-path': 'off',
      },
    },
  ];
};
