# @itaober/commitlint-config

[English](./README.md) | 简体中文

## 简介

`@itaober/commitlint-config` 提供了一套预定义的 commitlint 规则和配置，帮助统一代码提交规范。

## 安装

```bash
pnpm add @commitlint/cli @itaober/commitlint-config -D
```

## 使用

> 参考 [Commitlint 官方配置文档](https://commitlint.js.org/reference/configuration.html)。

在项目根目录中创建 `commitlint.config.js` 或 `commitlint.config.ts` 配置文件：

```js
export default {
  extends: ['@itaober/commitlint-config'],
  // 自定义配置
};
```

### commit-msg hook 校验

要在创建提交信息之前自动检查，你可以将此配置与 `simple-git-hooks` 一起使用：

1. 安装所需依赖：

```bash
pnpm add simple-git-hooks lint-staged -D
```

2. 在 `package.json` 中添加以下配置：

```json
{
  "simple-git-hooks": {
    "commit-msg": "npx --no-install commitlint --edit $1"
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

## 规则

此配置强制执行以下提交信息格式：

```
type(scope?): subject

body?

footer?
```

示例：

```bash
git commit -m "feat: add new feature"
```

### 类型 (type)

- `init`: 项目初始化
- `feat`: 添加新特性或功能
- `fix`: 修复缺陷或问题
- `docs`: 文档更新或改进
- `style`: 代码格式调整（不影响代码逻辑）
- `refactor`: 代码重构（不涉及新功能或修复）
- `perf`: 性能优化相关的改动
- `test`: 测试用例的添加或修改
- `build`: 构建系统或外部依赖项的更改
- `ci`: 持续集成配置和脚本的更改
- `chore`: 不修改源代码的其他工程化改动
- `revert`: 撤销之前的提交
- `release`: 发布新版本

## 许可证

[![License MIT](https://img.shields.io/badge/License-MIT-yellow)](../../LICENSE)
