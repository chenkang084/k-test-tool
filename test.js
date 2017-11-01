// var program = require("commander");

// program
//   .version("0.1.0")
//   .command("rmdir <dir> [otherDirs...]")
//   .action(function(dir, otherDirs) {
//     console.log("rmdir %s", dir);
//     if (otherDirs) {
//       otherDirs.forEach(function(oDir) {
//         console.log("rmdir %s", oDir);
//       });
//     }
//   });

// program
//   .command("rc-test [name]", "run specified task")
// //   .parse(process.argv);

// program.parse(process.argv);

// const runner = require("child_process");

// const ls = runner.spawn("node", ["-v"]);

// ls.stdout.on("data", function(data) {
//   console.log("data from child: " + data);
// });

// ls.stdout.on("close", function(data) {
//   console.log("close: " + data);
// });

const t = require("./src/reverse");

console.log(t);
