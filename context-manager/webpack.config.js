const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index',
  // entry: {
  //   configuration: './src/configuration',
  //   // pubsub: './src/pubsub',
  //   // store: './src/store',
  // },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'context-manager.[name].js',
    library: ['ContextManager', '[name]'],
  },
};
