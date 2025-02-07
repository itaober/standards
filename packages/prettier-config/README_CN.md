# @itaober/prettier-config

[English](./README.md) | 简体中文

## 简介

`@itaober/prettier-config` 提供了一套 Prettier 配置预设，便于实现一致且规范的代码格式。

## 安装

```bash
pnpm add prettier @itaober/prettier-config -D
```

## 使用方法

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

## 特性

本配置包含了带个人偏好的预设和多个内置插件：

- `prettier-plugin-jsdoc`：格式化 JSDoc 注释
- `prettier-plugin-packagejson`：格式化 `package.json` 文件
- `prettier-plugin-tailwindcss`：格式化 Tailwind CSS 类名（当项目依赖中包含 `tailwindcss` 时自动启用）

完整的配置详情，请查看[源代码](./src/index.ts)。

## 额外配置（可选）

### VSCode 设置

要将 Prettier 集成到 VSCode 中，请在 `.vscode/settings.json` 中添加以下设置：

```json
{
  "prettier.enable": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

这样可以将 Prettier 设置为默认格式化工具，并在保存时自动格式化文件。

### 添加 `format` 脚本

你可以在 `package.json` 中添加 `format` 脚本，以便在需要时手动格式化代码：

```json
{
  "scripts": {
    "format": "prettier --write ."
  }
}
```

### 提交前格式化

为了确保代码在每次提交前都保持一致的格式，你可以使用 `simple-git-hooks` 和 `lint-staged`：

1. 安装所需依赖：

```bash
pnpm add simple-git-hooks lint-staged -D
```

2. 在 `package.json` 中添加以下配置：

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

3. 在 `package.json` 的 prepare 脚本中添加 simple-git-hooks 初始化：

```json
"scripts": {
  "prepare": "simple-git-hooks"
}
```

4. 运行 `pnpm prepare` 初始化 simple-git-hooks：

```bash
pnpm prepare
```

## 协议

[![License MIT](https://img.shields.io/badge/License-MIT-yellow)](../../LICENSE)
