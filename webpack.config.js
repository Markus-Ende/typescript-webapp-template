const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // Cleans the dist folder before each build
    new CleanWebpackPlugin(['dist']),
    // Creates the index.html
    new HtmlWebpackPlugin({
      title: 'Minimal Webpack Typescript Starter'
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
};