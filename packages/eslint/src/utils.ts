import { readFileSync } from "fs";
import path from "path";

import type { Awaitable } from "./types"

export const isDepExist = (name: string) => {
  const packageJsonPath = path.join(process.cwd(), 'package.json');

  try {
    const packageJsonContent = readFileSync(packageJsonPath, 'utf-8');
    const { dependencies = {}, devDependencies = {} } = JSON.parse(packageJsonContent);
    const allDependencies = { ...dependencies, ...devDependencies };

    return Object.keys(allDependencies).includes(name);
  } catch (error) {
    return false;
  }
};

export async function interopDefault<T>(m: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> {
  const resolved = await m
  return (resolved as any).default || resolved
}

/**
 * Rename plugin prefixes in a rule object.
 * Accepts a map of prefixes to rename.
 *
 * @example
 * ```ts
 * import { renameRules } from '@antfu/eslint-config'
 *
 * export default [{
 *   rules: renameRules(
 *     {
 *       '@typescript-eslint/indent': 'error'
 *     },
 *     { '@typescript-eslint': 'ts' }
 *   )
 * }]
 * ```
 */
export function renameRules(rules: Record<string, any>, map: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(rules)
      .map(([key, value]) => {
        for (const [from, to] of Object.entries(map)) {
          if (key.startsWith(`${from}/`))
            return [to + key.slice(from.length), value]
        }
        return [key, value]
      }),
  )
}