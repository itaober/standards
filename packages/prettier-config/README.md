# @itaober/prettier-config

English | [简体中文](./README_CN.md)

## Introduction

`@itaober/prettier-config` provides a shared Prettier preset with optimized rules and plugin support for consistent code formatting.

## Features

This package includes thoughtfully chosen presets and several built-in plugins:

- `prettier-plugin-jsdoc`: Formats JSDoc comments
- `prettier-plugin-packagejson`: Formats `package.json` files
- `prettier-plugin-tailwindcss`: Formats Tailwind CSS classes (auto-enabled if `tailwindcss` in dependencies)

For the full configuration details, see the [source code](./src/index.ts).

## Installation

```bash
pnpm add prettier @itaober/prettier-config -D
```

## Usage

### Configuration

If you fully agree with the `@itaober/prettier-config`, you can add it directly to your `package.json`:

```json
{
  "prettier": "@itaober/prettier-config"
}
```

Or, if you prefer using a JS config file, create a `.prettierrc.js` and include the following code:

```js
import config from '@itaober/prettier-config';

export default config;
```

Of course, if you want to customize the configuration, create a `.prettierrc.js` and use the following code:

```js
import config from '@itaober/prettier-config';

/** @type {import('prettier').Config} */
export default {
  ...config,
  plugins: [
    ...config.plugins,
    // Your custom plugins
  ],
  // Your custom configurations
};
```

### Add package.json Script

```json
{
  "scripts": {
    "format": "prettier --write ."
  }
}
```

## IDE Support

### VSCode

1. Install the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
2. Add the following settings to your `.vscode/settings.json`:

```json
{
  "prettier.enable": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## Extra Configuration (Optional)

### Pre-commit Formatting

To ensure your code is consistently formatted before each commit, you can use `simple-git-hooks` and `lint-staged`:

1. Install the required packages:

```bash
pnpm add simple-git-hooks lint-staged -D
```

2. Add the following config to your `package.json`:

```json
{
  "scripts": {
    "prepare": "simple-git-hooks"
  },
  "simple-git-hooks": {
    "pre-commit": "pnpm lint-staged"
  },
  "lint-staged": {
    "*": "pnpm format"
  }
}
```

3. Activate `simple-git-hooks`:

```bash
npx simple-git-hooks
```

## License

[![License MIT](https://img.shields.io/badge/License-MIT-yellow)](../../LICENSE)
