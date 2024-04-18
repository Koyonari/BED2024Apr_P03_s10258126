//Part 1: Getting info out of a path
const path = require("node:path");
const notes = 'notes.txt';
console.log(path.dirname(notes));
console.log(path.basename(notes));
console.log(path.extname(notes));

//Part 2: Reading files
const fs = require('node:fs');

fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  };
  console.log(data);
});

//Part 3: Writing files
const content = 'Write some notes!';

fs.writeFile('notes.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});

//Part 4: Color output
const chalk = require("chalk");
console.log(chalk.yellow("hi"));