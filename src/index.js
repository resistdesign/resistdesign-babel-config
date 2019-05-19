const Path = require('path');

module.exports = {
  babelrc: false,
  ignore: [],
  only: [
    /^.*\.jsx$/m
  ],
  plugins: [
    // JSX
    require.resolve('@babel/plugin-transform-react-jsx'),

    // Rest Spread
    require.resolve('@babel/plugin-proposal-object-rest-spread'),

    // Default Export Compatibility
    require.resolve('babel-plugin-add-module-exports'),

    // Stage 0
    require.resolve('@babel/plugin-proposal-function-bind'),

    // Stage 1
    require.resolve('@babel/plugin-proposal-export-default-from'),
    require.resolve('@babel/plugin-proposal-logical-assignment-operators'),
    [
      require.resolve('@babel/plugin-proposal-optional-chaining'),
      {
        loose: false
      }
    ],
    [
      require.resolve('@babel/plugin-proposal-pipeline-operator'),
      {
        proposal: 'minimal'
      }
    ],
    [
      require.resolve('@babel/plugin-proposal-nullish-coalescing-operator'),
      {
        loose: false
      }
    ],
    require.resolve('@babel/plugin-proposal-do-expressions'),

    // Stage 2
    [
      require.resolve('@babel/plugin-proposal-decorators'),
      {
        legacy: true
      }
    ],
    require.resolve('@babel/plugin-proposal-function-sent'),
    require.resolve('@babel/plugin-proposal-export-namespace-from'),
    require.resolve('@babel/plugin-proposal-numeric-separator'),
    require.resolve('@babel/plugin-proposal-throw-expressions'),

    // Stage 3
    require.resolve('@babel/plugin-syntax-dynamic-import'),
    require.resolve('@babel/plugin-syntax-import-meta'),
    require.resolve('@babel/plugin-proposal-class-properties'),
    require.resolve('@babel/plugin-proposal-json-strings'),

    // Runtime
    [
      require.resolve('@babel/plugin-transform-runtime'),
      {
        helpers: true,
        regenerator: true,
        absoluteRuntime: Path.dirname(
          require.resolve('@babel/runtime/package')
        )
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
