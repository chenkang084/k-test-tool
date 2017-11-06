const chalk = require("chalk"),
  fs = require("fs"),
  cwdPath = require("../utils/cwdPath"),
  userKarmaConfigPath = cwdPath("karma.conf.js");

let userKarmaConfig;

try {
  if (fs.existsSync(userKarmaConfigPath)) {
    console.log(
      chalk.green(
        `read user defines karma config file in: ${userKarmaConfigPath}`
      )
    );
    userKarmaConfig = require(userKarmaConfigPath);
  } else {
    console.log(chalk.red(`can't find user's karma.conf.js`));
    process.exit();
  }
} catch (error) {
  console.log(chalk.red(error));
}

module.exports = userKarmaConfig;
