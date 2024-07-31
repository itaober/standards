# @itaober/tsconfig

English / [简体中文](./README_CN.md)

## Introduction

`@itaober/tsconfig` provides a set of TypeScript configuration files suitable for different types of projects. Currently, it includes the following configurations:

- `base.json`: Basic configuration suitable for general TypeScript projects.
- `react-library.json`: Configuration for developing and publishing React component libraries.
- `react-app.json`: Configuration for building and developing React applications.

## Install

```bash
pnpm install @itaober/tsconfig -D
```

## Usage

In your project's `tsconfig.json` file, use the `extends` field to inherit the appropriate configuration file.

### `base.json`

```json
{
  "extends": "@itaober/tsconfig/base.json"
  // Your custom configurations
}
```

### `react-app.json`

```json
{
  "extends": "@itaober/tsconfig/react-app.json"
  // Your custom configurations
}
```

### `react-library.json`

```json
{
  "extends": "@itaober/tsconfig/react-library.json"
  // Your custom configurations
}
```

## Changelog

See the [CHANGELOG.md](./CHANGELOG.md).
