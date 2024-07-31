# @itaober/tsconfig

[English](./README.md) / 简体中文

## 介绍

`@itaober/tsconfig` 提供了一套适用于不同类型项目的 TypeScript 配置文件，当前包含以下配置：

- `base.json`: 基础配置，适用于一般的 TypeScript 项目；
- `react-library.json`: React 库配置，用于开发和发布 React 组件库；
- `react-app.json`: React 应用配置，用于构建和开发 React 应用程序。

## 安装

```bash
pnpm install @itaober/tsconfig -D
```

## 使用方法

在项目的 `tsconfig.json` 文件中，使用 `extends` 字段继承对应的配置文件。

### `base.json`

```json
{
  "extends": "@itaober/tsconfig/base.json"
  // 你的自定义配置
}
```

### `react-app.json`

```json
{
  "extends": "@itaober/tsconfig/react-app.json"
  // 你的自定义配置
}
```

### `react-libary.json`

```json
{
  "extends": "@itaober/tsconfig/react-library.json"
  // 你的自定义配置
}
```

## 变更日志

查看 [CHANGELOG.md](./CHANGELOG.md)。
