'use strict';

const path = require('path');

/**
 * If the "--production" command-line parameter is specified when invoking Heft, then the
 * "production" function parameter will be true.  You can use this to enable bundling optimizations.
 */
function createWebpackConfig({ production }) {
  const webpackConfig = {
    mode: production ? 'production' : 'development',
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },
    output: {
      library: {
        type: 'commonjs'
      }
    }
  };

  return webpackConfig;
}

module.exports = createWebpackConfig;
