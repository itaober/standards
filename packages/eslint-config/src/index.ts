import type { Linter } from 'eslint';

import {
  getIgnoresConfig,
  getImportsConfig,
  getJavaScriptConfig,
  getPrettierConfig,
  getReactConfig,
  getTypeScriptConfig,
} from './configs';
import type { IConfigOptions } from './types';
import { getPackageIsExisted, resolveSubOptions } from './utils';

const getESLintConfig = (options?: IConfigOptions): Linter.Config[] => {
  const {
    typescript = getPackageIsExisted('typescript'),
    react = getPackageIsExisted('react'),
    imports = true,
    prettier = getPackageIsExisted('prettier'),
    ignores = [],
    ...overrides
  } = options ?? {};

  return [
    ...getIgnoresConfig(ignores),
    ...getJavaScriptConfig(resolveSubOptions(options, 'javascript')),
    ...(typescript ? getTypeScriptConfig(resolveSubOptions(options, 'typescript')) : []),
    ...(react ? getReactConfig(resolveSubOptions(options, 'react')) : []),
    ...(imports ? getImportsConfig() : []),
    ...(prettier ? getPrettierConfig() : []),
    overrides,
  ];
};

export default getESLintConfig;
