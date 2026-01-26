# @ts-mono-starter/math-utils

Math utility functions for basic arithmetic operations.

## Installation

```bash
npm install @ts-mono-starter/math-utils
# or
pnpm add @ts-mono-starter/math-utils
```

## Usage

```typescript
import { add, subtract, multiply, divide } from '@ts-mono-starter/math-utils';

const sum = add(2, 3); // 5
const difference = subtract(10, 4); // 6
const product = multiply(3, 4); // 12
const quotient = divide(10, 2); // 5
```

## API

### `add(a: number, b: number): number`

Adds two numbers together.

### `subtract(a: number, b: number): number`

Subtracts the second number from the first.

### `multiply(a: number, b: number): number`

Multiplies two numbers.

### `divide(a: number, b: number): number`

Divides the first number by the second. Throws an error if dividing by zero.

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
