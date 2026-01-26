# ts-mono-starter

English | [简体中文](./README.md)

## Overview

A starter template for **TypeScript Monorepo multi-package library projects**, integrated with: building, development building, automated testing, versioning, and code linting capabilities.

## Features

### Commands

| Feature         | Command           |
| --------------- | ----------------- |
| Build           | `npm run build`   |
| Development     | `npm run dev`     |
| Test            | `npm run test`    |
| Set Version     | `npm run version` |
| Add Sub-package | `npm run newLib`  |
| Publish Beta    | `npm run beta`    |

## Directory Structure

### Scaffold

```shell
test        # Automated testing project
scripts     # Build scripts and configurations
packages    # Sub-packages
```

### Library

```sh
src     # Source code directory
assets  # Static files
```

## Automated Testing

### Writing Test Code

1. Create test file: `src/index.test.ts`
1. Import sub-package: `pnpm add ../packages/mylib`
1. Write test code

   ```ts
   import { fn } from 'mylib';

   describe('mylib index', () => {
     it('should be defined', () => {
       fn();
       expect(true).toBe(true);
     });
   });
   ```

1. Run tests: `npm run test`
   > Tests will run twice: ESModule and CommonJS

_It's recommended to write all automated tests for **all sub-packages** in this project_

### Principles

1. Test code is **completely identical to the final usage code**, example:

   ```ts
   import a from 'libname'  ✅

   import a from '../src/**' ❌
   ```

1. Support importing any code file from the library

   ```ts
   import lib from 'libname/utils/a.ts';
   ```

1. Run the build artifacts, not the source code. `npm run test` executes tests twice: CommonJS and ESModule

## Build Configuration

The project uses `tsdown` for bundling. Modify the corresponding configuration files:

- Global configuration: `scripts/tsdownConfig.ts`
- Individual project configuration: `packages/*/tsdown.config.ts`

### Other

1. Formatting: Files are formatted using `prettier` when saving files or committing
1. Compatibility: Handles the following compatibility concerns:
   1. Polyfill
   1. CommonJS and ESModule differences, e.g., `import.meta.dirname`
