# @itaober/commitlint

[English](./README.md) / 简体中文

## 介绍

`@itaober/commitlint` 提供了一组预定义的 Commitlint 配置，帮助统一代码提交规范，并支持命令行 prompt 提示。

## 安装

```bash
pnpm install @itaober/commitlint -D
```

## 使用方式

### Commitlint 配置文件

> 参考 [Commitlint 官方配置文档](https://commitlint.js.org/reference/configuration.html)。

#### ESM

```js
/** @type {import("@itaober/commitlint").UserConfig} */
export default {
  extends: ['@itaober/commitlint'],
  // 在此处添加自定义配置
};
```

#### CJS

```js
/** @type {import("@itaober/commitlint").UserConfig} */
module.exports = {
  extends: ['@itaober/commitlint'],
  // 在此处添加自定义配置
};
```

### commit-msg hook 校验

在每次提交前校验提交信息是否符合 commlint 配置的规则，参考如下配置：

1. 安装所需依赖

```bash
pnpm add simple-git-hooks -D
```

2. 在 `package.json` 中添加如下代码

```json
{
  "simple-git-hooks": {
    "commit-msg": "npx --no-install commitlint --edit $1"
  }
}
```

### prompt 提示（可选）

`@itaober/commitlint` 内置了 `@commitlint/cz-commitlint` 和 `commitizen`，支持命令行 prompt 提示来完成 commit 信息的提交。如需此功能，可参考以下配置：

1. 在 `package.json` 中添加如下代码

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

2. 在 `git add xxx` 执行之后，执行 `pnpm cz` 来进行 commit message 的提交。

## 变更日志

查看 [CHANGELOG.md](./CHANGELOG.md)。
