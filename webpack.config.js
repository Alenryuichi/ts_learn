module.exports = {
  mode: "development",
  entry: "./src/helloworld.ts", // 入口文件路径
  output: {
    filename: "bundle.js", // 输出文件名
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  devServer: {
    static: "./dist", // 资源文件的根目录
    open: true, // 自动打开浏览器
    hot: true, // 开启模块热替换
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
      },
    ],
  },
};