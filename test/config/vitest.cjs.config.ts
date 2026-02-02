import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    conditions: ['require', 'node']
  },
  ssr: {
    resolve: {
      conditions: ['require', 'node']
    }
  },
  test: {
    globals: true,
    watch: false
  }
});
