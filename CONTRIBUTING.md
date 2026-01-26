# Contributing to TypeScript Monorepo Starter

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/ts-mono-starter.git
   cd ts-mono-starter
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```

## Development Workflow

### Making Changes

1. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes to the code

3. Write or update tests for your changes

4. Ensure all tests pass:

   ```bash
   pnpm test
   ```

5. Ensure code quality checks pass:

   ```bash
   pnpm lint
   pnpm format:check
   ```

6. Build all packages to ensure they compile:
   ```bash
   pnpm build
   ```

### Creating a Changeset

If your changes affect any packages, create a changeset:

```bash
pnpm changeset
```

Follow the prompts to:

- Select which packages are affected
- Choose the appropriate version bump (major, minor, or patch)
- Describe your changes

This will create a file in `.changeset/` that will be used to update versions and changelogs.

### Committing

We follow conventional commit messages:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Test changes
- `chore:` - Build process or auxiliary tool changes

Example:

```bash
git commit -m "feat: add new string utility function"
```

### Submitting a Pull Request

1. Push your changes to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

2. Open a pull request on GitHub

3. Ensure all CI checks pass

4. Wait for review and address any feedback

## Code Style

### TypeScript

- Use TypeScript strict mode
- Add JSDoc comments for public APIs
- Use meaningful variable and function names
- Prefer `const` over `let` when possible

### Testing

- Write tests for all new features
- Maintain or improve test coverage
- Use descriptive test names
- Follow the existing test structure

### File Structure

Each package should follow this structure:

```
packages/my-package/
├── src/
│   ├── index.ts          # Main entry point
│   └── index.test.ts     # Tests
├── package.json
├── tsconfig.json
├── tsup.config.ts
├── vitest.config.ts
└── README.md
```

## Adding a New Package

1. Create a new directory in `packages/`:

   ```bash
   mkdir packages/my-new-package
   ```

2. Copy configuration files from an existing package

3. Update `package.json` with appropriate name and description

4. Add the package reference to root `tsconfig.json`

5. Create your source code and tests

6. Add a README.md documenting the package

## Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Test a specific package
cd packages/math-utils
pnpm test
```

## Building

```bash
# Build all packages
pnpm build

# Build in watch mode
pnpm dev

# Build a specific package
cd packages/math-utils
pnpm build
```

## Code Quality

### Linting

```bash
# Lint all packages
pnpm lint

# Fix linting issues automatically
pnpm lint:fix
```

### Formatting

```bash
# Format all files
pnpm format

# Check formatting
pnpm format:check
```

## Documentation

- Keep README files up to date
- Add JSDoc comments to public APIs
- Include usage examples
- Document breaking changes

## Release Process

Releases are automated using Changesets:

1. Contributors create changesets for their changes
2. Changesets accumulate on the main branch
3. A "Version Packages" PR is automatically created
4. Maintainers review and merge the version PR
5. Packages are automatically published to npm

## Questions?

If you have questions or need help, please:

1. Check existing documentation
2. Search existing issues
3. Open a new issue with the "question" label

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
