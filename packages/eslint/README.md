# @itaober/eslint-config

English / [简体中文](./README_CN.md)

## Introduction

- Supports [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files)
- Reasonable presets, ready to use out of the box
- Auto-fixing and code formatting, compatible with and gradually replacing Prettier
- Default support for JavaScript and TypeScript
- Optional support for React and Prettier

## Installation

```bash
pnpm install eslint @itaober/eslint-config -D
```

## Usage

### Configuration File

Create an `eslint.config.js` file in the root directory of your project:

```js
import eslint from '@itaober/eslint-config';

export default eslint();
```

If your project already has an ESLint configuration in the old format and you want to maintain compatibility, you can use [`@eslint/eslintrc`](https://github.com/eslint/eslintrc) to convert it to the ESLint Flat config.

```js
import eslint from '@itaober/eslint-config';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  ...eslint(),

  // Old version configuration
  ...compat.config({
    extends: [
      'eslint:recommended',
      // other extends
    ],
  }),

  // other flat configs...
];
```

### Add `lint` Script to `package.json`

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Pre-commit Auto-check

```bash
pnpm add simple-git-hooks lint-staged -D
```

2. Add the following code to your `package.json`

```json
{
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  },
  "lint-staged": {
    "*": ["pnpm lint:fix"]
  }
}
```

## VSCode Support

1. Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

2. Configure `.vscode/settings.json` in the root directory of your project:

```json
{
  // Prettier
  "prettier.enable": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // ESLint
  "eslint.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },
  "eslint.runtime": "node",
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact", "vue"],
  // Disable formatOnSave for specific file types
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  "[typescript]": {
    "editor.formatOnSave": false
  },
  "[typescriptreact]": {
    "editor.formatOnSave": false
  },
  "[vue]": {
    "editor.formatOnSave": false
  }
}
```

## Customization

TODO:

## Changelog

See the [CHANGELOG.md](./CHANGELOG.md).
