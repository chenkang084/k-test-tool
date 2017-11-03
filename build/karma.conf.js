// Karma configuration

const root = process.cwd(), //node excuate path
  fs = require("fs"),
  chalk = require("chalk"),
  path = require("path"),
  userKarmaConfigPath = path.resolve(root, "./karma.conf.js");
// console.log(userKarmaConfigPath);
let userKarmaConfig;
if (fs.existsSync(userKarmaConfigPath)) {
  userKarmaConfig = require(userKarmaConfigPath);
}

// console.log(userKarmaConfig);

const webpackConfig = require("./webpack.config.js");

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine"],
    // list of files / patterns to load in the browser
    files: ["../node_modules/babel-polyfill/dist/polyfill.js"].concat(
      // path.resolve(root, "./tests.webpack.js")
      // "../../../src/**/*.spec.js"
      "../src/**/*.js"
    ), // list of files to exclude
    exclude: ["karma.conf.js"].concat(userKarmaConfig.exclude),
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      [
        // "../../../src/**/*.spec.js",
        "../src/**/*.js"
      ]: ["webpack", "sourcemap"]
    },
    webpack: webpackConfig,
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
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
