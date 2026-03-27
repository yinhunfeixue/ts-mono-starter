import type { InlineConfig } from 'vitest/node';

/**
 * 所有 vitest 配置共享的基础 test 选项。
 */
export const baseTestConfig: InlineConfig = {
  globals: true,
  watch: false,
  reporters: ['tree']
};
