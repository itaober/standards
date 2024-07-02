import type { Linter } from "eslint";

import { GLOB_IGNORES } from "../globs";

export const ignores = (): Linter.FlatConfig[] => {
  return [{ ignores: GLOB_IGNORES }];
};
