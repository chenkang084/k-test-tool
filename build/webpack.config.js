"use strict";

const webpack = require("webpack"),
  _ = require("lodash"),
  env = _.trim(process.env.NODE_ENV),
  path = require("path"),
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  cwdPath = require("../utils/cwdPath"),
  rootPath = path.resolve(__dirname, "../");

console.log(require.resolve(`babel-preset-es2015`),"===========");

module.exports = {
  devtool: "inline-source-map",
  // resolveLoader: {
  //   modules: [path.resolve(rootPath, "./node_modules")],
  //   moduleExtensions: ["-loader"]
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          query: {
            presets: [
              require.resolve(`babel-preset-es2015`),
              require.resolve(`babel-preset-stage-0`),
              require.resolve(`babel-preset-react`)
            ]
          }
        },
        exclude: [
          path.resolve(rootPath, "./node_modules/"),
          path.resolve(cwdPath("node_modules"))
        ]
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
