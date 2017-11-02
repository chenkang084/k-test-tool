"use strict";

const webpack = require("webpack"),
  _ = require("lodash"),
  env = _.trim(process.env.NODE_ENV),
  path = require("path"),
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  rootPath = path.resolve(__dirname, "../");

module.exports = {
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: [path.resolve(rootPath, "./node_modules/")]
        // exclude:
        //   env === "dev" ? / / : /node_modules\/(?!(webpack-dev-server)\/).*/
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "common" // Specify the common bundle's name.
    // }),

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
