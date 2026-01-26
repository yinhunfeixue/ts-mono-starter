import { defineConfig } from 'tsdown';
import babelPlugin from './plugins/BabelPlugin.ts';

const development = process.env.NODE_ENV === 'development';

export default defineConfig({
  entry: 'src/**/*.ts',
  sourcemap: development,
  shims: true,
  plugins: [babelPlugin],
  format: {
    esm: {
      dts: {
        eager: true
      }
    },
    cjs: {
      dts: false
    }
  }
});
