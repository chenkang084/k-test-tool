"use strict";

const webpack = require("webpack"),
  _ = require("lodash"),
  env = _.trim(process.env.NODE_ENV),
  path = require("path"),
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  rootPath = path.resolve(__dirname, "../");

module.exports = {
  devtool: "inline-source-map",
  resolveLoader: {
    modules: [
      // "D:\\Users\\git\\react\\notification\\node_modules\\.6.5.7@rc-tools\\node_modules",
      // "D:\\Users\\git\\react\\notification\\node_modules"
      path.resolve(rootPath, "./node_modules")
    ],
    moduleExtensions: ["-loader"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"]
        // exclude: [path.resolve(rootPath, "./node_modules/")]
        // exclude:
        //   env === "dev" ? / / : /node_modules\/(?!(webpack-dev-server)\/).*/
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DllReferencePlugin({
      context: rootPath,
      name: "vendor",
      manifest: require(path.resolve(
        rootPath,
        "./src/library/vendor-manifest.json"
      ))
    })
  ],
  resolve: {
    modules: ["node_modules", path.join(rootPath, "./node_modules")],
    extensions: [".web.js", ".js", ".json", ".scss", ".css", ".less"]
  }
};
