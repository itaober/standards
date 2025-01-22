# @itaober/tsconfig

English | [简体中文](./README_CN.md)

## Introduction

`@itaober/tsconfig` provides a set of TypeScript configuration files suitable for different types of projects. Currently, it includes the following configurations:

- `base.json`: Basic configuration suitable for general TypeScript projects.
- `react-library.json`: Configuration for developing and publishing React component/hooks libraries.
- `react-app.json`: Configuration for building and developing React applications.

## Installation

```bash
pnpm install @itaober/tsconfig -D
```

## Usage

In your `tsconfig.json`, extend the configuration:

### `base.json`

Basic configuration with strict type checking, ESNext features, and essential compiler options:

```jsonc
{
  "extends": "@itaober/tsconfig/base.json",
  // Your custom configurations
}
```

### `react-library.json`

Optimized for React library development:

```jsonc
{
  "extends": "@itaober/tsconfig/react-library.json",
  // Your custom configurations
}
```

### `react-app.json`

Tailored for React application development:

```jsonc
{
  "extends": "@itaober/tsconfig/react-app.json",
  // Your custom configurations
}
```

## License

MIT
