const path = require('path');
// const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.join(__dirname, '/client/src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
        include: [
          path.resolve(__dirname, '/client'),
        ],
      },
      {
        test: /\.css$/,
        loader: 'style-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
  },
  target: 'web',
  // externals: [nodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/public'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
