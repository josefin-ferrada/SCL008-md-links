const fs = require('fs');
const fetch = require('node-fetch');
var markdownLinkExtractor = require('markdown-link-extractor');
const command = process.argv[2]

var markdown = fs.readFileSync('./../README.md').toString();
var links = markdownLinkExtractor(markdown);


links.forEach(function (link) {
    console.log(link);
  

});

links.forEach(function (element) {
    fetch(element).then((res)=>{
        
    console.log(res.url + " " + res.status + " " + res.statusText);
    
    })
    .catch (error =>{
        console.log(error.message)
      
    })

});


exports.links = links;













/*const fs = require("fs");
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

fs.readFile("./../README.md", "utf-8", (err, data) => {
  if (err) throw err;
});

var markdownLinkExtractor = require("markdown-link-extractor");

var markdown = fs.readFileSync("./../README.md").toString();

var links = markdownLinkExtractor(markdown);

let linksAndStatuses = [];
links.forEach(function(link) {
  let object = {};
  object.link = link;
  object.status = getStatus(link);
  linksAndStatuses.push(object);
});
console.log(linksAndStatuses);*/
/*fs.readlink("README.md", function(err, linkString) {
  // .. do some error handling here ..
  console.log(linkString);
});*/
/*function getStatus(url) {
  let state = null;
  var request = new XMLHttpRequest();

  request.open("GET", url, true);
  request.send();
  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      console.log("status code: " + request.status); //this contains the status code
      state = request.status;
    } else {
      request.abort;
    }
    return state;
  };
}
*/