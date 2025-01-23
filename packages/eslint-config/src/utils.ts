import { readFileSync } from 'fs';
import path from 'path';

import type { IConfigOptions, ResolvedOptions } from './types';

/**
 * Checks if a package exists in dependencies, devDependencies, or peerDependencies.
 *
 * @param name - The package name to check.
 * @returns `true` if the package is listed, otherwise `false`.
 */
export const getPackageIsExisted = (
  name: string,
  options: {
    dependencies: boolean;
    devDependencies: boolean;
    peerDependencies: boolean;
  } = { dependencies: true, devDependencies: true, peerDependencies: true },
): boolean => {
  try {
    const packageJsonPath = path.resolve(process.cwd(), 'package.json');
    const {
      dependencies = {},
      devDependencies = {},
      peerDependencies = {},
    } = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

    const selectedDependencies = {
      ...(options.dependencies ? dependencies : {}),
      ...(options.devDependencies ? devDependencies : {}),
      ...(options.peerDependencies ? peerDependencies : {}),
    };

    return name in selectedDependencies;
  } catch (error) {
    console.error('@itaober/eslint-config getPackageIsExisted function error: ', error);
    return false;
  }
};

/**
 * Converts a value to an array if it is not already an array.
 *
 * @param value The value to convert.
 * @returns An array containing the value or the value itself if it is already an array.
 */
export const toArray = <T>(value: T | T[]): T[] => {
  return Array.isArray(value) ? value : [value];
};

/**
 * Rename plugin prefixes in a rule object. Accepts a map of prefixes to rename.
 *
 * @example
 *   ```ts
 *   export default [{
 *     rules: renameRules(
 *       {
 *         '@typescript-eslint/indent': 'error'
 *       },
 *       { '@typescript-eslint': 'ts' }
 *     )
 *   }]
 *   ```;
 */
export const renameRules = (rules: Record<string, any>, map: Record<string, string>) => {
  return Object.fromEntries(
    Object.entries(rules).map(([key, value]) => {
      for (const [from, to] of Object.entries(map)) {
        if (key.startsWith(`${from}/`)) return [to + key.slice(from.length), value];
      }
      return [key, value];
    }),
  );
};

export const resolveSubOptions = <K extends keyof IConfigOptions>(
  options: IConfigOptions = {},
  key: K,
): ResolvedOptions<IConfigOptions[K]> => {
  return typeof options[key] === 'boolean' ? ({} as any) : options[key] || {};
};
