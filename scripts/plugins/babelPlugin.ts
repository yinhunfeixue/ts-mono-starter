import babel from '@rollup/plugin-babel';

const babelPlugin = babel({
  babelHelpers: 'bundled',
  extensions: ['.ts', '.js'],
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: { node: 20 },
        useBuiltIns: 'usage',
        corejs: '3.48.0'
      }
    ]
  ]
});

export default babelPlugin;
