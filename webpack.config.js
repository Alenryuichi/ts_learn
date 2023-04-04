const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: './src/index.ts',
    mock: './src/mock_test.ts'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      '@mock': path.resolve(__dirname, 'mock')
    }
  },
  devServer: {
    // static: "./dist", // 资源文件的根目录
    // open: false, // 自动打开浏览器
    // hot: false, // 开启模块热替换
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      // 指定注入的js文件
      chunks: ["mock"]
    }),
  ],
};