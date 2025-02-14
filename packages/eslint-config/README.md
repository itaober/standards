# @itaober/eslint-config

English | [简体中文](./README_CN.md)

## Introduction

`@itaober/eslint-config` provides a set of ESLint configuration presets based on **personal preferences**:

- Requires ESLint v9 or above
- Default support for [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files)
- Reasonable presets, one-line setup, out-of-the-box usage
- Support for TypeScript, React, and more
- Compatible with Prettier

## Installation

```bash
pnpm add eslint @itaober/eslint-config -D
```

## Usage

### Configuration File

> For more configuration options, refer to [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files)

Create `eslint.config.js` in your project root directory and add the following code:

```js
import getESLintConfig from '@itaober/eslint-config';

export default getESLintConfig();
```

### Add Scripts to package.json

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## IDE Support

### VSCode

1. Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Add the following configuration to your `settings.json`:

```jsonc
{
  "eslint.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never",
  },
  "eslint.runtime": "node",
  "eslint.run": "onSave",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
  ],
  "eslint.workingDirectories": [
    {
      "mode": "auto",
    },
  ],
}
```

## Optional Configs

### Lint staged

If you want ESLint to check and automatically fix your code before each commit, you can use `simple-git-hooks` and `lint-staged`:

1. Install the required dependencies:

```bash
pnpm add simple-git-hooks lint-staged -D
```

2. Add the following configuration to your `package.json`:

```json
{
  "scripts": {
    "prepare": "simple-git-hooks"
  },
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  },
  "lint-staged": {
    "*": "pnpm lint:fix"
  }
}
```

3. Activate `simple-git-hooks`:

```bash
npx simple-git-hooks
```

## License

[![License MIT](https://img.shields.io/badge/License-MIT-yellow)](../../LICENSE)
