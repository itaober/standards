import { readFileSync } from 'fs';
import path from 'path';

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
