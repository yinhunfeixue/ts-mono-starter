import { defineConfig } from 'vitest/config';
import { baseTestConfig } from './vitest.base.config';

export default defineConfig({
  test: {
    ...baseTestConfig
  }
});
