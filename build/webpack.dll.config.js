"use strict";

const webpack = require("webpack"),
  path = require("path"),
  CleanWebpackPlugin = require("clean-webpack-plugin"),
  rootPath = path.resolve(__dirname, "../");

module.exports = {
  entry: {
    vendor: ["react", "react-dom"]
  },
  output: {
    path: rootPath + "/src/library", //打包后的文件存放的地方
    filename: "vendor.dll.js", //打包后输出文件的文件名
    library: "vendor"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: [path.resolve(__dirname, "./node_modules/*")]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin([rootPath + "/src/library/*"]),
    new webpack.DllPlugin({
      path: path.resolve(rootPath, "./src/library/[name]-manifest.json"),
      name: "[name]"
    })
  ],
  resolve: {
    modules: ["node_modules", path.join(rootPath, "./node_modules")],
    extensions: [".web.js", ".js", ".json"]
  }
};
