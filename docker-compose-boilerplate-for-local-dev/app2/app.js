// app2

const express = require('express');

const app = express();
const port = 3002;

let counter = 0;

app.get('/', (req, res) => {
  console.log(`${counter} - Hey, I\'m app2, running on localhost:${port}.\n I got a "GET" request to "/", and this is my response!`);
  const obj = { firstName: "Andrey", secondName: "Ponomarev" };
  res.send(JSON.stringify(obj));
  // res.send('Hey, I\'m app2.\n I got a "GET" request to "/", and this is my response!');
  counter++;
});

app.listen(port, () => {
  console.log(`app2 is listening on port ${port}!`);
});
