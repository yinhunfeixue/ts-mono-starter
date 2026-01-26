# TypeScript Monorepo Starter

A production-ready TypeScript monorepo starter for library projects using pnpm workspaces. This starter includes everything you need to build, test, and publish multiple TypeScript packages with modern tooling and best practices.

## Features

- 🏗️ **Monorepo Structure**: Organized workspace using pnpm for efficient dependency management
- 📦 **Multiple Packages**: Example packages demonstrating library structure
- 🔨 **Build System**: Fast builds with tsup supporting both ESM and CJS outputs
- 📘 **Type Declarations**: Automatic generation of TypeScript declaration files
- ✅ **Testing**: Vitest for fast, modern unit testing
- 🔍 **Code Quality**: ESLint and Prettier for consistent code style
- 🚀 **CI/CD**: GitHub Actions workflows for testing and automated releases
- 📝 **Changesets**: Automated version management and changelog generation
- 🔧 **Shared Configs**: Centralized TypeScript, ESLint, and build configurations
- 🎯 **Independent Packages**: Each package is independently buildable and testable

## Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

Install pnpm if you haven't already:

```bash
npm install -g pnpm
```

## Getting Started

### Installation

Clone this repository and install dependencies:

```bash
git clone <your-repo-url>
cd ts-mono-starter
pnpm install
```

### Build

Build all packages:

```bash
pnpm build
```

Build a specific package:

```bash
cd packages/math-utils
pnpm build
```

### Development

Run build in watch mode for all packages:

```bash
pnpm dev
```

Or for a specific package:

```bash
cd packages/math-utils
pnpm dev
```

### Testing

Run tests for all packages:

```bash
pnpm test
```

Run tests in watch mode:

```bash
pnpm test:watch
```

Test a specific package:

```bash
cd packages/string-utils
pnpm test
```

### Linting and Formatting

Lint all packages:

```bash
pnpm lint
```

Fix linting issues:

```bash
pnpm lint:fix
```

Format code:

```bash
pnpm format
```

Check formatting:

```bash
pnpm format:check
```

## Project Structure

```
ts-mono-starter/
├── .changeset/              # Changesets configuration for version management
├── .github/
│   └── workflows/           # GitHub Actions CI/CD workflows
├── packages/
│   ├── math-utils/          # Example math utilities package
│   │   ├── src/
│   │   │   ├── index.ts     # Source code
│   │   │   └── index.test.ts # Tests
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── tsup.config.ts   # Build configuration
│   │   └── vitest.config.ts # Test configuration
│   └── string-utils/        # Example string utilities package
│       ├── src/
│       ├── package.json
│       ├── tsconfig.json
│       ├── tsup.config.ts
│       └── vitest.config.ts
├── .eslintrc.js             # ESLint configuration
├── .prettierrc              # Prettier configuration
├── package.json             # Root package.json with workspace scripts
├── pnpm-workspace.yaml      # pnpm workspace configuration
├── tsconfig.base.json       # Base TypeScript configuration
└── tsconfig.json            # Root TypeScript configuration
```

## Adding a New Package

1. Create a new directory in `packages/`:

```bash
mkdir packages/my-new-package
cd packages/my-new-package
```

2. Create a `package.json`:

```json
{
  "name": "@ts-mono-starter/my-new-package",
  "version": "1.0.0",
  "description": "My new package",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    }
  },
  "files": ["dist"],
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch",
    "test": "vitest run",
    "test:watch": "vitest",
    "clean": "rm -rf dist *.tsbuildinfo"
  },
  "devDependencies": {
    "tsup": "^8.0.1",
    "typescript": "^5.3.3",
    "vitest": "^1.2.1"
  }
}
```

3. Create configuration files (`tsconfig.json`, `tsup.config.ts`, `vitest.config.ts`) similar to existing packages.

4. Add your source code in `src/index.ts` and tests in `src/index.test.ts`.

5. Update the root `tsconfig.json` to include a reference to your new package.

6. Install dependencies:

```bash
pnpm install
```

## Release Management

This project uses [Changesets](https://github.com/changesets/changesets) for version management and publishing.

### Creating a Changeset

When you make changes to a package, create a changeset:

```bash
pnpm changeset
```

This will prompt you to:

1. Select which packages have changed
2. Choose the version bump type (major, minor, patch)
3. Provide a description of the changes

### Publishing Packages

The release workflow is automated via GitHub Actions:

1. Merge your changes to the `main` branch
2. The release workflow will create a "Version Packages" PR
3. Review and merge the version PR
4. Packages will be automatically published to npm

For manual releases:

```bash
pnpm version  # Updates versions based on changesets
pnpm build    # Build all packages
pnpm release  # Publish to npm
```

## CI/CD

This project includes two GitHub Actions workflows:

### CI Workflow (`.github/workflows/ci.yml`)

Runs on every push and pull request:

- Lints code with ESLint
- Checks code formatting with Prettier
- Builds all packages
- Runs all tests

### Release Workflow (`.github/workflows/release.yml`)

Runs on pushes to the `main` branch:

- Creates version PRs using Changesets
- Publishes packages to npm when version PRs are merged

To enable automatic publishing, add `NPM_TOKEN` to your GitHub repository secrets.

## Configuration Files

### TypeScript

- `tsconfig.base.json`: Base TypeScript configuration shared across all packages
- `tsconfig.json`: Root TypeScript configuration with project references
- `packages/*/tsconfig.json`: Package-specific TypeScript configurations

### Build (tsup)

Each package has a `tsup.config.ts` that configures:

- Entry points
- Output formats (ESM and CJS)
- TypeScript declaration generation
- Source maps

### Testing (Vitest)

Each package has a `vitest.config.ts` for test configuration.

### Linting and Formatting

- `.eslintrc.js`: ESLint configuration with TypeScript support
- `.prettierrc`: Prettier configuration for consistent code formatting

## Tips and Best Practices

1. **Keep packages focused**: Each package should have a single responsibility
2. **Write tests**: Maintain good test coverage for all packages
3. **Use changesets**: Always create a changeset when making changes
4. **Follow semantic versioning**: Use appropriate version bumps (major, minor, patch)
5. **Document your code**: Add JSDoc comments and README files
6. **Run checks locally**: Use `pnpm lint`, `pnpm test`, and `pnpm build` before committing

## Scripts Reference

### Root Scripts

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `pnpm build`        | Build all packages                       |
| `pnpm dev`          | Run build in watch mode for all packages |
| `pnpm test`         | Run tests for all packages               |
| `pnpm test:watch`   | Run tests in watch mode                  |
| `pnpm lint`         | Lint all packages                        |
| `pnpm lint:fix`     | Fix linting issues                       |
| `pnpm format`       | Format all files                         |
| `pnpm format:check` | Check formatting                         |
| `pnpm clean`        | Clean all build outputs and node_modules |
| `pnpm changeset`    | Create a new changeset                   |
| `pnpm version`      | Update package versions                  |
| `pnpm release`      | Build and publish packages               |

### Package Scripts

Each package supports:

| Command           | Description             |
| ----------------- | ----------------------- |
| `pnpm build`      | Build the package       |
| `pnpm dev`        | Build in watch mode     |
| `pnpm test`       | Run tests               |
| `pnpm test:watch` | Run tests in watch mode |
| `pnpm clean`      | Clean build outputs     |

## License

MIT

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.
