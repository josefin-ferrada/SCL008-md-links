const fs = require('fs');

fs.readFile('./../README.md', 'utf-8',(err, data) => {
  if (err) throw err;
  ;
});


var markdownLinkExtractor = require('markdown-link-extractor');

var markdown = fs.readFileSync('README.md').toString();

var links = markdownLinkExtractor(markdown);

links.forEach(function (link) {
   ;


});


console.log(links);
fs.readlink("README.md", function (err, linkString) { 
         // .. do some error handling here .. 
         console.log(linkString) 
});