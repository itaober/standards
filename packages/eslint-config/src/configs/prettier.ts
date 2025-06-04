import type { Linter } from 'eslint';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export const getPrettierConfig = (): Linter.Config[] => {
  return [eslintConfigPrettier];
};
