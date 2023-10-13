#!/usr/bin/node
const request = require('request');
const url = process.argv[2];
const results = {};
request.get(url, (err, __, body) => {
  if (err) {
    console.error(err);
    return;
  }
  JSON.parse(body).forEach(task => {
    if (task.completed) results[task.userId] = (results[task.userId] || 0) + 1;
  });
  console.log(results);
});
