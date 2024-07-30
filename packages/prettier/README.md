# @itaober/prettier-config

English / [简体中文](./README.md)

## Getting Started

### Install Dependencies

```bash
pnpm install @itaober/prettier-config prettier -D
```

### Configuration File

> If you fully agree with the `@itaober/prettier-config`, it is recommended to use the `JSON` method.
>
> If you partially agree with the `@itaober/prettier-config` and need to add custom configurations, it is recommended to use the `CJS` or `ESM` method.
>
> For more configurations, refer to the [Prettier configuration](https://prettier.io/docs/en/configuration).

#### `ESM`

Set [`"type": "module"`](https://nodejs.org/api/packages.html#type) in your `package.json`.

Configuration files can be one of the following:

- `.prettierrc.js`
- `prettier.config.js`
- `.prettierrc.mjs`
- `prettier.config.mjs`

```js
import config from '@itaober/prettier-config';

/** @type {import("prettier").Config} */
export default {
  ...config,
  // Add your custom configurations here
};
```

#### `CJS`

Set [`"type": "commonjs"`](https://nodejs.org/api/packages.html#type) in your `package.json`.

Configuration files can be one of the following:

- `.prettierrc.js`
- `prettier.config.js`
- `.prettierrc.cjs`
- `prettier.config.cjs`

```js
/** @type { import("prettier").Config } */
module.exports = {
  ...require('@itaober/prettier-config'),
  // Add your custom configurations here
};
```

#### `JSON`

Configuration files can be one of the following:

- `.prettierrc`
- `.prettierrc.json`
- `.prettierrc.json5`

```json
"@itaober/prettier-config"
```

#### `package.json`

Add the following configuration to your `package.json`:

```json
{
  "prettier": "@itaober/prettier-config"
}
```

### Add `format` Script to `package.json`

Example:

```json
{
  "scripts": {
    "format": "prettier --write \"./**/*.{js,jsx,ts,tsx,json,vue}\""
  }
}
```

### Pre-commit Formatting

If you want `prettier` to format your code before every `git commit`, follow these steps:

1. Install the necessary dependencies

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
    "*": "pnpm format"
  }
}
```

## Changelog

See the [CHANGELOG.md](./CHANGELOG.md).