import parserTs from '@typescript-eslint/parser';
import type { Linter } from 'eslint';
import pluginReact from 'eslint-plugin-react';
// @ts-expect-error eslint-plugin-react-hooks is not typed
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';

import { GLOB_SRC } from '../globs';
import type { ICustomFileGlobs, IOverrides, ITypeScriptWithTsconfigPath } from '../types';
import { getPackageIsExisted, toArray } from '../utils';

const ReactRefreshAllowConstantExportPackages = ['vite'];
const RemixPackages = ['@remix-run/node', '@remix-run/react', '@remix-run/serve', '@remix-run/dev'];
const NextJsPackages = ['next'];

export const getReactConfig = (
  options?: IOverrides & ITypeScriptWithTsconfigPath & ICustomFileGlobs,
): Linter.Config[] => {
  const { overrides, tsconfigPath: _tsconfigPath, files: customFiles = [] } = options ?? {};

  const files = [GLOB_SRC, ...customFiles];

  const tsconfigPath = _tsconfigPath ? toArray(_tsconfigPath) : undefined;
  const isTypeAware = !!tsconfigPath;

  const isAllowConstantExport = ReactRefreshAllowConstantExportPackages.some(i =>
    getPackageIsExisted(i),
  );
  const isUsingRemix = RemixPackages.some(i => getPackageIsExisted(i));
  const isUsingNext = NextJsPackages.some(i => getPackageIsExisted(i));

  return [
    {
      name: 'itaober/react/setup',
      plugins: {
        react: pluginReact,
        'react-hooks': pluginReactHooks,
        'react-refresh': pluginReactRefresh,
      },
    },
    {
      name: 'itaober/react/rules',
      files,
      languageOptions: {
        parser: parserTs,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ...(isTypeAware ? { project: tsconfigPath } : {}),
        },
        sourceType: 'module',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        ...pluginReact.configs.recommended.rules,
        'react/no-danger': 'warn',
        'react/self-closing-comp': 'error',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',

        // recommended rules react-hooks
        ...pluginReactHooks.configs.recommended.rules,
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',

        // react refresh
        'react-refresh/only-export-components': [
          'warn',
          {
            allowConstantExport: isAllowConstantExport,
            allowExportNames: [
              ...(isUsingNext
                ? [
                    'config',
                    'generateStaticParams',
                    'metadata',
                    'generateMetadata',
                    'viewport',
                    'generateViewport',
                  ]
                : []),
              ...(isUsingRemix ? ['meta', 'links', 'headers', 'loader', 'action'] : []),
            ],
          },
        ],

        ...overrides,
      },
    },
  ];
};
