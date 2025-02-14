# @itaober/prettier-config

[English](./README.md) | 简体中文

## 简介

`@itaober/prettier-config` 提供了一套 Prettier 配置预设，便于实现一致且规范的代码格式。

## 特性

本配置包含了带个人偏好的预设和多个内置插件：

- `prettier-plugin-jsdoc`：格式化 JSDoc 注释
- `prettier-plugin-packagejson`：格式化 `package.json` 文件
- `prettier-plugin-tailwindcss`：格式化 Tailwind CSS 类名（当项目依赖中包含 `tailwindcss` 时自动启用）

完整的配置详情，请查看[源代码](./src/index.ts)。

## 安装

```bash
pnpm add prettier @itaober/prettier-config -D
```

## 使用方法

### 配置文件

如果你完全认同 `@itaober/prettier-config` 的配置，可直接在 `package.json` 中添加：

```json
{
  "prettier": "@itaober/prettier-config"
}
```

如果你更倾向使用 JS 配置文件，可以创建 `.prettierrc.js` 文件，并添加以下代码：

```js
import config from '@itaober/prettier-config';

export default config;
```

当然，如果你需要自定义部分配置，可以创建 `.prettierrc.js` 文件，使用以下代码：

```js
import config from '@itaober/prettier-config';

/** @type {import('prettier').Config} */
export default {
  ...config,
  plugins: [
    ...config.plugins,
    // 自定义插件
  ],
  // 自定义配置
};
```

### 添加 package.json 脚本

```json
{
  "scripts": {
    "format": "prettier --write ."
  }
}
```

## IDE 支持

### VSCode

1. 安装 [Prettier 插件](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
2. 在 `.vscode/settings.json` 中添加以下设置：

```json
{
  "prettier.enable": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## 额外配置（可选）

### 提交前格式化

如果你期望每次提交代码前都由 Prettier 格式化，可以使用 `simple-git-hooks` 和 `lint-staged` 实现：

1. 安装所需依赖：

```bash
pnpm add simple-git-hooks lint-staged -D
```

2. 在 `package.json` 中添加以下配置：

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

3. 激活 `simple-git-hooks`：

```bash
npx simple-git-hooks
```

## 协议

[![License MIT](https://img.shields.io/badge/License-MIT-yellow)](../../LICENSE)
