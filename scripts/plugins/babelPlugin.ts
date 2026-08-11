import babel from '@rollup/plugin-babel';

const babelPlugin = babel({
  babelHelpers: 'bundled',
  extensions: ['.ts', '.js'],
  presets: ['@babel/preset-typescript']
});

export default babelPlugin;
