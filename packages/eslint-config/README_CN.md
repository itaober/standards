# @itaober/eslint-config

[English](./README.md) | 简体中文

## 简介

> [!TIP]
>
> 基于**_个人喜好_**。

`@itaober/eslint-config` 提供了一套 ESLint 配置预设：

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

参考 [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files)，在项目根目录下创建 `eslint.config.js`，并添加一下代码：

```js
import getESLintConfig from '@itaober/eslint-config';

export default getESLintConfig();
```
