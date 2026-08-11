import { defineConfig } from 'vitest/config';
import { baseTestConfig } from './vitest.base.config.ts';

export default defineConfig({
  test: {
    ...baseTestConfig
  }
});
