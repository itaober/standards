import type { Linter } from 'eslint';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export const getPrettierConfig = (): Linter.Config[] => {
  return [pluginPrettierRecommended];
};
