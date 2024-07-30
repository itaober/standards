# @itaober/prettier-config

[English](./README.md) / 简体中文

## 快速开始

### 安装依赖

```bash
pnpm install @itaober/prettier-config prettier -D
```

### 配置文件

> 如果你完全认同 `@itaober/prettier-config` 配置，推荐使用 `JSON` 方式；
>
> 如果你认同部分 `@itaober/prettier-config` 配置，并且需要添加自定义配置，则推荐使用 `CJS` 者 `ESM` 方式。
>
> 更多配置参考 [Prettier 配置](https://prettier.io/docs/en/configuration)。

#### `ESM`

在 `package.json` 中设置 [`"type": "module"`](https://nodejs.org/api/packages.html#type)。

配置文件可以是以下之一：

- `.prettierrc.js`
- `prettier.config.js`
- `.prettierrc.mjs`
- `prettier.config.mjs`

```js
import config from '@itaober/prettier-config';

/** @type {import("prettier").Config} */
export default {
  ...config,
  // 在此处添加自定义配置
};
```

#### `CJS`

在 `package.json` 中设置 [`"type": "commonjs"`](https://nodejs.org/api/packages.html#type)。

配置文件可以是以下之一：

- `.prettierrc.js`
- `prettier.config.js`
- `.prettierrc.cjs`
- `prettier.config.cjs`

```js
/** @type { import("prettier").Config } */
module.exports = {
  ...require('@itaober/prettier-config'),
  // 在这里添加自定义配置
};
```

#### `JSON`

配置文件可以是以下之一：

- `.prettierrc`
- `.prettierrc.json`
- `.prettierrc.json5`

```json
"@itaober/prettier-config"
```

#### `package.json`

在 `package.json` 中添加如下配置：

```json
{
  "prettier": "@itaober/prettier-config"
}
```

### 在 `package.json` 中添加 `format` 脚本

举例:

```json
{
  "scripts": {
    "format": "prettier --write \"./**/*.{js,jsx,ts,tsx,json,vue}\""
  }
}
```

### pre-commit 格式化

如果你需要每次 `git commit` 之前都由 `prettier` 格式化代码，可参考：

1. 安装所需依赖

```bash
pnpm add simple-git-hooks lint-staged -D
```

2. 将如下代码到你的 `package.json` 中

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

## 变更日志

查看 [CHANGELOG.md](./CHANGELOG.md)。
