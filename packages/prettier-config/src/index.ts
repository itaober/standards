import type { Config } from 'prettier';

import { getPackageIsExisted } from './utils';

/**
 * @type {import('prettier').Config}
 * @see https://prettier.io/docs/en/configuration.html
 */
const prettierConfig: Config = {
  plugins: [
    'prettier-plugin-jsdoc',
    'prettier-plugin-packagejson',
    ...(getPackageIsExisted('tailwindcss') ? ['prettier-plugin-tailwindcss'] : []),
  ],
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  rangeStart: 0,
  rangeEnd: Infinity,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  singleAttributePerLine: false,
};

export default prettierConfig;
