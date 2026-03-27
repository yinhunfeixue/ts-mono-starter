import { defineConfig } from 'vitest/config';
import { baseTestConfig } from './vitest.base.config';

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
    ...baseTestConfig
  }
});
