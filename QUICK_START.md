# Quick Start Guide

Get your TypeScript monorepo up and running in minutes!

## Prerequisites

- Node.js >= 18.0.0
- Install pnpm: `npm install -g pnpm`

## Quick Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd ts-mono-starter

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test
```

## Development Workflow

### Working on a Package

```bash
# Navigate to a package
cd packages/math-utils

# Run in watch mode
pnpm dev

# Run tests in watch mode (in another terminal)
pnpm test:watch
```

### Adding a New Package

1. Copy an existing package structure:

```bash
cp -r packages/math-utils packages/my-package
cd packages/my-package
```

2. Update `package.json`:

```json
{
  "name": "@ts-mono-starter/my-package",
  "description": "My awesome package"
}
```

3. Write your code in `src/index.ts`

4. Add tests in `src/index.test.ts`

5. Update root `tsconfig.json` to add a reference:

```json
{
  "references": [{ "path": "./packages/my-package" }]
}
```

6. Install and build:

```bash
pnpm install
pnpm build
```

## Common Tasks

### Check Code Quality

```bash
# Lint
pnpm lint

# Format
pnpm format

# Check formatting
pnpm format:check
```

### Clean Build Artifacts

```bash
# Clean all packages and node_modules
pnpm clean

# Reinstall and rebuild
pnpm install
pnpm build
```

### Version Management

```bash
# Create a changeset (when you make changes)
pnpm changeset

# Update versions (before releasing)
pnpm version

# Build and publish
pnpm release
```

## Package Structure

Each package has:

- `src/index.ts` - Main entry point
- `src/index.test.ts` - Tests
- `package.json` - Package configuration
- `tsconfig.json` - TypeScript config
- `tsup.config.ts` - Build config
- `vitest.config.ts` - Test config

## Output Formats

Each package builds to:

- **ESM**: `dist/index.mjs` (for modern bundlers)
- **CJS**: `dist/index.js` (for Node.js)
- **Types**: `dist/index.d.ts` (TypeScript definitions)
- **Source Maps**: `.map` files for debugging

## Testing

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

## Next Steps

1. Replace example packages with your own
2. Update README.md with your project details
3. Configure NPM_TOKEN in GitHub secrets for automated publishing
4. Start building! 🚀

For more details, see the full [README.md](./README.md) and [CONTRIBUTING.md](./CONTRIBUTING.md).
