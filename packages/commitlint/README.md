```markdown
# @itaober/commitlint

English / [简体中文](./README_CN.md)

## Introduction

`@itaober/commitlint` provides a set of predefined Commitlint configurations to help standardize commit messages and supports command-line prompt suggestions.

## Install

```bash
pnpm install @itaober/commitlint -D
```

## Usage

### Commitlint Configuration File

> Refer to the [Commitlint official configuration documentation](https://commitlint.js.org/reference/configuration.html).

#### ESM

```js
/** @type {import("@itaober/commitlint").UserConfig} */
export default {
  extends: ['@itaober/commitlint'],
  // Add your custom configurations here
};
```

#### CJS

```js
/** @type {import("@itaober/commitlint").UserConfig} */
module.exports = {
  extends: ['@itaober/commitlint'],
  // Add your custom configurations here
};
```

### commit-msg hook lint

Validate commit messages against commitlint rules before each commit. Follow these steps:

1. Install the dependencies

```bash
pnpm add simple-git-hooks -D
```

2. Add the following code to your `package.json`

```json
{
  "simple-git-hooks": {
    "commit-msg": "npx --no-install commitlint --edit $1"
  }
}
```

### prompt suggestions (optional)

`@itaober/commitlint` includes `@commitlint/cz-commitlint` and `commitizen`, supporting command-line prompt suggestions for commit messages. To enable this feature, follow these steps:

1. Add the following code to your `package.json`

```json
{
  "scripts": {
    "cz": "git-cz"
  },
  "config": {
    "commitizen": {
      "path": "@commitlint/cz-commitlint"
    }
  }
}
```

2. After `git add`, run `pnpm cz` to create a commit message with prompt suggestions.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md).
```