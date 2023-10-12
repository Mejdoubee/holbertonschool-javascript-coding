#!/usr/bin/node
const fs = require('fs');
const FilePath = process.argv[2];
fs.readFile(FilePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
