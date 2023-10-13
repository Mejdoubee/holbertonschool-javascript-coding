#!/usr/bin/node
const request = require('request');
const movieID = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movieID}`;
request(url, (err, response, body) => {
  if (err) {
    console.error(err);
    return;
  }
  const data = JSON.parse(body);
  console.log(data.title);
});
