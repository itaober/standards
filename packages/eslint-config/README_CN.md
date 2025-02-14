# @itaober/eslint-config

[English](./README.md) | 简体中文

## 简介

`@itaober/eslint-config` 提供了一套基于**个人喜好**的 ESLint 配置预设：

- 需要 ESLint v9 及以上版本
- 默认支持 [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files)
- 合理的预设，一行代码，开箱即用
- 支持 TypeScript，React 等
- 兼容 Prettier

## 安装

```bash
pnpm add  eslint @itaober/eslint-config -D
```

## 使用方法

### 配置文件

> 更多配置文件，参考 [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files)

在项目根目录下创建 `eslint.config.js`，并添加一下代码：

```js
import getESLintConfig from '@itaober/eslint-config';

export default getESLintConfig();
```

### 添加 package.json 脚本

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## IDE 支持

### VSCode

1. 安装 [ESLint 插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. 在 `settings.json` 中添加以下配置：

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

## 额外配置（可选）

### pre-commit 自动检查

如果你期望每次提交代码前都由 ESLint 检查并自动修复，可以使用 `simple-git-hooks` 和 `lint-staged` 实现：

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
    "*": "pnpm lint:fix"
  }
}
```

3. 激活 `simple-git-hooks`：

```bash
npx simple-git-hooks
```

## 协议

[![License MIT](https://img.shields.io/badge/License-MIT-yellow)](../../LICENSE)
