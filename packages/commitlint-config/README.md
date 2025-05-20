# @itaober/commitlint-config

English | [简体中文](./README_CN.md)

## Introduction

`@itaober/commitlint-config` provides a set of predefined commitlint rules and configurations to help maintain consistent commit message standards.

## Installation

```bash
pnpm add @commitlint/cli @itaober/commitlint-config -D
```

## Usage

> Please refer to the [Commitlint Official Configuration Documentation](https://commitlint.js.org/reference/configuration.html).

Create a `commitlint.config.js` or `commitlint.config.ts` configuration file in your project root directory:

```js
export default {
  extends: ['@itaober/commitlint-config'],
  // custom configurations
};
```

### Commit Message Validation with Git Hooks

To automatically check commit messages before they are created, you can use this configuration with `simple-git-hooks`:

1. Install the required packages:

```bash
pnpm add simple-git-hooks lint-staged -D
```

2. Add the following config to your `package.json`:

```json
{
  "simple-git-hooks": {
    "commit-msg": "npx --no-install commitlint --edit $1"
  }
}
```

3. Add simple-git-hooks initialization to the prepare script in `package.json`:

```json
"scripts": {
  "prepare": "simple-git-hooks"
}
```

4. Activate `simple-git-hooks`:

```bash
npx simple-git-hooks
```

## Rules

This configuration enforces the following commit message format:

```
type(scope?): subject

body?

footer?
```

Example:

```bash
git commit -m "feat: add new feature"
```

### Types

- `init`: Initial commit
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- `ci`: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit
- `release`: Create a release commit

## License

[![License MIT](https://img.shields.io/badge/License-MIT-yellow)](../../LICENSE)
