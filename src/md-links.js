const fs = require("fs");
const fetch = require("node-fetch");
var markdownLinkExtractor = require("markdown-link-extractor");
const path = require("path");
var command = process.argv[2];

var markdown = fs.readFileSync(command).toString();
var links = markdownLinkExtractor(markdown);

function linkStatus(objectlink) {
  return new Promise(function(resolve, reject) {
    fetch(objectlink.link)
      .then(res => {
        let content = {};
        content.link = objectlink.link;
        content.title = objectlink.titulo;
        content.status = res.status;
        resolve(content);

        //como meto mi resultado a un arreglo de objetos
      })
      .catch(error => {
        console.log(error.message);
      });
  });
}

Promise.all(links.map(singleElement => linkStatus(singleElement))).then(
  list => {
    //console.log("imprimiendo");
    console.log(list);
    //return list;
  }
);
