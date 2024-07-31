# @itaober/eslint-config

[English](./README.md) / 简体中文

## 介绍

- 支持 [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files)
- 合理的预设，开箱即用
- 自动修复和代码格式化，兼容并逐步替代 Prettier
- 默认支持 JavaScript、TypeScript
- 可选支持 React、Prettier

## 安装

```bash
pnpm install eslint @itaober/eslint-config -D
```

## 使用方法

### 配置文件

创建一个 `eslint.config.js` 文件在你的项目根目录下：

```js
import eslint from '@itaober/eslint-config';

export default eslint();
```

如果你项目原来已存在 ESLint 配置且为老版本写法，并期望兼容，可以使用 [`@eslint/eslintrc`](https://github.com/eslint/eslintrc) 将其转换为 ESLint Flat config。

```js
import eslint from '@itaober/eslint-config';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  ...eslint(),

  // 老版本配置
  ...compat.config({
    extends: [
      'eslint:recommended',
      // 其他 extends
    ],
  }),

  // 其他 flat configs...
];
```

### 在 `package.json` 中添加 `lint` 脚本

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### pre-commit 自动校验

```bash
pnpm add simple-git-hooks lint-staged -d
```

2. 在 `package.json` 中添加如下代码

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

## VSCode 支持

1. 安装 [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

2. 在项目根目录配置 `.vscode/settings.json`：

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

## 自定义

TODO:

## 变更日志

查看 [CHANGELOG.md](./CHANGELOG.md).
