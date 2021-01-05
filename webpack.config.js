const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: "production" when using npm build command 
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name]-[hash:6].[ext]',
          outputPath: 'images',
          publicPath: 'images',
          emitFile: true,
          esModule: false
        },
        // type: 'asset/resource',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })]
};