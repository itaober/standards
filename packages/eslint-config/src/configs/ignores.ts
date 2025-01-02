import type { Linter } from 'eslint';

import { GLOB_IGNORES } from '../globs';

export const getIgnoresConfig = (override?: Linter.Config['ignores']): Linter.Config[] => {
  return [{ ignores: [...GLOB_IGNORES, ...(override ?? [])] }];
};
