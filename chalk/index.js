var chalk = require("chalk");

var message = chalk.bgRed("Hello ") + chalk.bgGreen(chalk.red('darkness my ')) + chalk.bgYellow(chalk.black("old friend.~"));
console.log(message);