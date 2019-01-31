const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    index:'./src/smart-easing.js'
  },
  output: {
    filename: 'smart-easing.node.js',
    path: path.resolve(__dirname, 'dist'),
    library:'SmartEasing',
    libraryTarget: 'commonjs2'
  },
  target:'node',
  externals: [nodeExternals()]
};