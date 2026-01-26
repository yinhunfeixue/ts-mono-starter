# ts-mono-starter

`command`

## 概述

一个用于 **TypeScript Monorepo 多包库项目** 的脚手架， 集成：构建、开发构建、自动化测试、发版、代码规范能力

## 功能

### 命令

| 功能     | 命令              |
| -------- | ----------------- |
| 构建     | `npm run build`   |
| 开发模式 | `npm run dev`     |
| 测试     | `npm run test`    |
| 设置版本 | `npm run version` |
| 添加子包 | `npm run newLib`  |
| 发beta版 | `npm run beta`    |

## 目录结构

### 脚手架

```shell
test        # 自动化测试项目
scripts     # 打包脚本和配置
packages    # 子包
```

### 库

```sh
src     # 源码目录
assets  # 静态文件
```

## 自动化测试

### 编写测试代码

1. 创建测试文件： `src/index.test.ts`
1. 引入子包：`pnpm add ../packages/mylib`
1. 编写测试代码

   ```ts
   import { fn } from 'mylib';

   describe('mylib index', () => {
     it('should be defined', () => {
       fn();
       expect(true).toBe(true);
     });
   });
   ```

1. 运行测试：`npm run test`
   > 测试会运行两次,esmodule、commonjs

_建议**所有子包**的自动化测试都在此项目编写_

### 原则

1. 测试代码和**最终使用的代码完全一致**, 示例

   ```ts
   import a from 'libname'  ✅

   import a from '../src/**' ❌
   ```

1. 支持import库中的任一代码文件

   ```ts
   import lib from 'libname/utils/a.ts';
   ```

1. 运行产物，而非源码。 `npm run test` 会执行两次测试: commonjs、esmodule

## 打包配置

项目使用 `tsdown` 打包, 修改对应的配置即可

- 全局配置： `scripts/tsdownConfig.ts`
- 单个项目配置：`packages/*/tsdown.config.ts`

### 其它

1. 格式化：保存文件、commit时，会使用`prettier`格式化
1. 兼容性：处理的兼容如下
   1. polyfill
   1. commonjs、esmodule差异，示例`import.meta.dirname`
