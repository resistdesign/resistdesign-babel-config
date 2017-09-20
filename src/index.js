var path = require('path');

module.exports = {
  babelrc: false,
  ignore: false,
  only: [
    /^.*\.jsx$/m
  ],
  plugins: [
    require.resolve('babel-plugin-transform-react-jsx'),
    require.resolve('babel-plugin-transform-class-properties'),
    require.resolve('babel-plugin-transform-object-rest-spread'),
    require.resolve('babel-plugin-transform-function-bind'),
    require.resolve('babel-plugin-add-module-exports'),
    [
      require.resolve('babel-plugin-transform-runtime'),
      {
        helpers: true,
        polyfill: true,
        regenerator: true,
        moduleName: path.dirname(require.resolve('babel-runtime/package'))
      }
    ]
  ],
  presets: [
    [
      require.resolve('babel-preset-env'),
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
