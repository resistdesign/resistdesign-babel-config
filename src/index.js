const path = require('path');

module.exports = {
  babelrc: false,
  ignore: [],
  only: [
    /^.*\.jsx$/m
  ],
  plugins: [
    require.resolve('@babel/plugin-transform-react-jsx'),
    require.resolve('@babel/plugin-proposal-class-properties'),
    require.resolve('@babel/plugin-proposal-object-rest-spread'),
    require.resolve('@babel/plugin-proposal-function-bind'),
    require.resolve('babel-plugin-add-module-exports'),
    [
      require.resolve('@babel/plugin-transform-runtime'),
      {
        helpers: true,
        regenerator: true,
        absoluteRuntime: path.dirname(require.resolve('@babel/runtime/package'))
      }
    ]
  ],
  presets: [
    [
      require.resolve('@babel/preset-env'),
      {
        targets: {
          browsers: [
            'last 2 versions'
          ],
          node: 'current'
        }
      }
    ]
  ]
};
