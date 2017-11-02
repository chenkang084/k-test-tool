const root = process.cwd(),
  //   fs = require("fs"),
  //   chalk = require("chalk"),
  path = require("path"),
  karmaConfigPath = path.join("root", "karma.conf.js");

// console.log

function runCmd(cmd, args, fn) {
  args = args || [];
  const runner = require("child_process").spawn(cmd, args, {
    // keep color
    stdio: "inherit"
  });
  runner.on("close", code => {
    if (fn) {
      fn(code);
    }
  });
}

// console.log(path.resolve(root, "./node_modules/karma/bin/karma"));

runCmd("node", [
  path.resolve(root, "node_modules/karma/bin/karma"),
  "start",
  path.resolve(root, "node_modules/k-test-tool/build/karma.conf.js")
]);
// runCmd("node", [path.resolve(__dirname , "./build/karma.conf.js")]);
// runCmd("node", ["-v"]);

// if (fs.existsSync(karmaConfigPath)) {
//   console.log(chalk.blue("Hello world!"));
//   const karmaConfig = require(karmaConfigPath);
//   const defaultKarmaConfig = require("./build/karma.conf");

//   console.log(defaultKarmaConfig);

//   if (karmaConfig && defaultKarmaConfig) {
//   }

//   fs.writeFileSync(
//     path.resolve(__dirname + "/karma.conf.js"),
//     `module.exports = function(config){config.set(${JSON.stringify(
//       defaultKarmaConfig
//     )})}`,
//     {
//       encoding: "utf-8"
//     }
//   );

//   console.log(".......");
// } else {
//   console.log(
//     chalk.red(
//       "The karma.conf.js doesn't exist in root path ,please define the file!"
//     )
//   );
//   process.exit();
// }

module.exports = function() {};
