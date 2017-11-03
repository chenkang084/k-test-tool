const path = require("path");

module.exports = function cwd() {
  const args = [].slice.call(arguments, 0);
  args.unshift(process.cwd());
  return path.join.apply(path, args);
};
