const path = require('path');

module.exports = {
  entry: {
    index: './src/smart-easing.js'
  },
  output: {
    filename: 'smart-easing.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'SmartEasing',
    libraryTarget: 'var',
    libraryExport: 'default',
    globalObject: 'this'
  },
  target: 'web'
};