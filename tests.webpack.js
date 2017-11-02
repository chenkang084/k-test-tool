var context = require.context("./src", true, /.spec\.js$/);

console.log(context);
context.keys().forEach(context);
