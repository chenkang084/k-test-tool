// Karma configuration

const chalk = require("chalk"),
  path = require("path"),
  rootPath = path.resolve(__dirname, "../"),
  webpackConfig = require("./webpack.config"),
  cwdPath = require("../utils/cwdPath");

const userKarmaConfig = require("./getUserConfig");

console.log(userKarmaConfig, "++++++++++++++++++");

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    frameworks: ["jasmine"],

    files: [
      path.resolve(rootPath, "./node_modules/babel-polyfill/dist/polyfill.js")
    ].concat(userKarmaConfig.files), // list of files to exclude
    exclude: ["karma.conf.js"].concat(userKarmaConfig.exclude),

    preprocessors: {
      [userKarmaConfig.preprocessors]: ["webpack", "sourcemap"]
    },
    webpack: webpackConfig,

    reporters: ["progress"],
    // web server port
    port: userKarmaConfig.port,
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: userKarmaConfig.browsers,
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: userKarmaConfig.singleRun,
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
