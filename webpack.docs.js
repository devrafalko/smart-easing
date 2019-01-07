const path = require('path');
const merge = require('webpack-merge');
const StylesLoader = require('styles-loader');
const stylesLoader = new StylesLoader({
  extract: 'bundled.css'
});

module.exports = merge(stylesLoader, {
  entry: {
    index: './docs/prod/index.js'
  },
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'docs/dist'),
    library: 'bundled',
    libraryTarget: 'var',
    libraryExport: 'default',
    globalObject: 'this'
  },
  target: 'web'
});