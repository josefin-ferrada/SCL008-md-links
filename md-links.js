const fs = require("fs");
const fetch = require("node-fetch");

const path = require("path");




module.exports = {


validatef : function validatef (objectlink) {
  return new Promise(function(resolve, reject) {
    fetch(objectlink.link)
      .then(res => {
        
        let content = {}; //como meto mi resultado a un arreglo de objetos
        content.link = objectlink.link;
        content.title = objectlink.titulo;
        content.status = res.status;
        content.statustext = res.statusText
      
        resolve(content);

       
      })
      .catch(error => {
        console.log(error.message);
      });
  });
},


stat : function stat (objectlink) {
  return new Promise(function(resolve, reject) {
    fetch(objectlink.link)
      .then(res => {
        
        let content = {}; //como meto mi resultado a un arreglo de objetos
        content.link = objectlink.link;
        content.title = objectlink.titulo;
        content.status = res.status;
        content.statustext = res.statusText
        resolve(content);

       
      })
      .catch(error => {
        console.log(error.message);
      });
  });
}

}










