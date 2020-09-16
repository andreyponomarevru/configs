// app1

/* 
const express = require('express');
const app = express();
const port = 3001;
app.get('/', (req, res) => {
  res.send('Hello, I\'m app1');
});
app.listen(port, () => {
  console.log(`app1 is listening on port ${port}!`);
});
*/

const http = require("http");

const { API_URL, API_PORT } = process.env;

let counter = 0;

console.log(API_URL, API_PORT);

function sendReq() {
  const req = http.request(
    { host: API_URL, port: API_PORT, path: "/", method: "GET" },
    (res) => {
      res.on("data", (chunk) => {
        const obj = JSON.parse(chunk);
        console.log(new Date().toISOString());
        console.log(
          `============= ${counter} RESPONSE BODY SENT BY localhost:3002 =============`
        );
        console.dir(obj);
      });
    }
  );

  req.end();

  req.on("error", (err) => {
    console.error(err.stack);
  });

  counter++;
}

setInterval(sendReq, 3000);
