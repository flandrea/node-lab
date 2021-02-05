const quotes = require("./quotes"); //importing quotes from quotes file


"use strict";
const http = require("http");
const port = 3000;

http.createServer((req, res) => {

  const index = Math.floor(Math.random() * quotes.length);  //random numbers as the array index

  const randomQuote = quotes[index]; //quote in index
    
  res.writeHead(200, {"Content-type": "text/plain"});
  res.write(randomQuote);
  res.end();
}).listen(port);
console.log("http://localhost:" + port);