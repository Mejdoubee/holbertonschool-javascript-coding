#!/usr/bin/node
const request = require('request');
const url = process.argv[2];
const charID = '18';
request(url, (err, response, body) => {
  if (err) {
    console.error(err);
    return;
  }
  let count = 0;
  const data = JSON.parse(body).results;
  for (const film of data) {
    if (film.characters.includes(`https://swapi-api.hbtn.io/api/people/${charID}/`)) {
      count += 1;
    }
  }
  console.log(count);
});
