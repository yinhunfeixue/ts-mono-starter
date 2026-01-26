# @ts-mono-starter/string-utils

String utility functions for common string manipulations.

## Installation

```bash
npm install @ts-mono-starter/string-utils
# or
pnpm add @ts-mono-starter/string-utils
```

## Usage

```typescript
import { capitalize, camelCase, kebabCase, truncate, reverse } from '@ts-mono-starter/string-utils';

capitalize('hello'); // 'Hello'
camelCase('hello world'); // 'helloWorld'
kebabCase('helloWorld'); // 'hello-world'
truncate('hello world', 8); // 'hello...'
reverse('hello'); // 'olleh'
```

## API

### `capitalize(str: string): string`

Capitalizes the first letter of a string.

### `camelCase(str: string): string`

Converts a string to camelCase.

### `kebabCase(str: string): string`

Converts a string to kebab-case.

### `truncate(str: string, maxLength: number): string`

Truncates a string to a specified length and adds ellipsis.

### `reverse(str: string): string`

Reverses a string.

## Development

```bash
# Run tests
pnpm test

# Build the package
pnpm build

# Watch mode for development
pnpm dev
```

## License

MIT
