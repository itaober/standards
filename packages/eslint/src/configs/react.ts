import { fixupPluginRules } from '@eslint/compat';
import type { Linter } from 'eslint';

import { GLOB_SRC } from '../globs';
import { parserTs, pluginReact, pluginReactHooks, pluginReactRefresh } from '../plugins';
import type { ICustomFileGlobs, IOverrides, ITypeScriptWithTsconfigPath } from '../types';
import { isPackageExisted, toArray } from '../utils';

const ReactRefreshAllowConstantExportPackages = ['vite'];
const RemixPackages = ['@remix-run/node', '@remix-run/react', '@remix-run/serve', '@remix-run/dev'];
const NextJsPackages = ['next'];

export const react = (
  options?: IOverrides & ITypeScriptWithTsconfigPath & ICustomFileGlobs,
): Linter.FlatConfig[] => {
  const { overrides, tsconfigPath: _tsconfigPath, files: customFiles = [] } = options ?? {};

  const files = [GLOB_SRC, ...customFiles];

  const tsconfigPath = _tsconfigPath ? toArray(_tsconfigPath) : undefined;
  const isTypeAware = !!tsconfigPath;

  const isAllowConstantExport = ReactRefreshAllowConstantExportPackages.some(i =>
    isPackageExisted(i),
  );
  const isUsingRemix = RemixPackages.some(i => isPackageExisted(i));
  const isUsingNext = NextJsPackages.some(i => isPackageExisted(i));

  return [
    {
      name: 'itaober/react/setup',
      plugins: {
        react: pluginReact,
        'react-hooks': fixupPluginRules(pluginReactHooks),
        'react-refresh': pluginReactRefresh,
      } as unknown as Linter.FlatConfig['plugins'],
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
