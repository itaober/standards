# @itaober/tsconfig

[English](./README.md) | 简体中文

## 介绍

`@itaober/tsconfig` 是一套为不同类型项目量身定制的 TypeScript 配置预设。目前包含以下几种配置：

- `base.json`：通用的 TypeScript 基础配置
- `react-library.json`：适用于 React 组件/工具库开发
- `react-app.json`：适用于 React 应用开发

## 安装

```bash
pnpm install @itaober/tsconfig -D
```

## 使用

在项目中的 `tsconfig.json` 中继承对应的配置：

### `base.json`

基础配置，启用了严格的类型检查、ESNext 特性以及其他推荐的编译选项：

```jsonc
{
  "extends": "@itaober/tsconfig/base.json",
  // 自定义配置
}
```

### `react-library.json`

React 组件/工具库开发配置：

```jsonc
{
  "extends": "@itaober/tsconfig/react-library.json",
  // 自定义配置
}
```

### `react-app.json`

React 应用开发配置：

```jsonc
{
  "extends": "@itaober/tsconfig/react-app.json",
  // 自定义配置
}
```

## 协议

MIT
