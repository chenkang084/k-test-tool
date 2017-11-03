// Karma configuration

const root = process.cwd(), //node excuate path
  fs = require("fs"),
  chalk = require("chalk"),
  path = require("path"),
  rootPath = path.resolve(__dirname, "../"),
  userKarmaConfigPath = path.resolve(root, "./karma.conf.js");
// console.log(userKarmaConfigPath);
let userKarmaConfig;
if (fs.existsSync(userKarmaConfigPath)) {
  userKarmaConfig = require(userKarmaConfigPath);
}


const webpackConfig = require("./webpack.config.js");

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    frameworks: ["jasmine"],

    files: ["../node_modules/babel-polyfill/dist/polyfill.js"].concat(
      // path.resolve(root, "./tests.webpack.js")
      "../../../src/**/*.spec.js"
      // "../src/**/*.js"
    ), // list of files to exclude
    exclude: ["karma.conf.js"].concat(userKarmaConfig.exclude),

    preprocessors: {
      // "../src/**/*.js"
      ["../../../src/**/*.spec.js"]: ["webpack", "sourcemap"]
    },
    // webpack: webpackConfig,
    webpack: {
      devtool: "inline-source-map",
      resolveLoader: {
        modules: [path.resolve(rootPath, "./node_modules")],
        moduleExtensions: ["-loader"]
      },
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
              path.resolve("../../../test-tool/node_modules")
            ]
          }
        ]
      }
    },

    reporters: ["progress"],
    // web server port
    port: 9876,
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["PhantomJS"],
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    plugins: [
      require("karma-chrome-launcher"),
      require("karma-phantomjs-launcher"),
      require("karma-sourcemap-loader"),
      require("karma-phantomjs-launcher"),
      require("karma-jasmine"),
      require("karma-webpack")
    ]
  });
};
