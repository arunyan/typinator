// const fs = require("fs");
// const https = require("https");
// const request = require("request");
// const express = require("express");
// const formidable = require("formidable");
// const removeMd = require("remove-markdown");
// const server = http.createServer();
const form = document.getElementById("form1");
const input = form.querySelector("input");
const form2 = document.getElementById("form2");
const result = testMarkdown.replace(/[(\[*)(\]>)(\)#)(\()]/g, "");

form.onchange = function convertMarkdown() {
  // prevent browser default
  e.preventDefault();

  // contain text content
  const markdown = input.value;

  // print text content in form1
  

  // print converted text in form2
  form2.textContent = text.markdown;


};


// server.on('request', (request, response) => {
//   res.writeHead(200, {'Content-Type': 'text/html'})
// });
