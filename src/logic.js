const fs = require("fs");
const fetch = require("node-fetch");
const path = require("path");

module.exports = {
	optionValidate: function optionValidate(objectlink) {
	  return new Promise(function(resolve, reject) {
	    fetch(objectlink.link)
	      .then(res => {
	        let content = {}; //como meto mi resultado a un arreglo de objetos
	        content.link = objectlink.link;
	        content.title = objectlink.titulo;
	        content.status = res.status;
	        content.statustext = res.statusText;
	        content.path = objectlink.path;
	        resolve(content);
	      })
	      .catch(error => {
	        console.log(error.message);
	      });
	  });
	},

	optionStat : function optionStat(objectlink) {
	  let stats = { total: 0, unique: 0 };

	  stats.total = objectlink.length;

	  var unique = [];

	  objectlink.forEach(element => {
	    if (!unique.includes(element.link)) {
	      unique.push(element.link);
	    }
	  });
	  stats.unique = unique.length;
	  return stats;
	},

	optionStatAndValidate : function optionStatAndValidate(objectlink) {
	  
	   let stats = {total: 0, unique : 0, broken: 0};

	        stats.total = objectlink.length;

	        var unique = [];

	        objectlink.forEach((element) => {
	          
	          if(!unique.includes(element.link)){// si no existe el link en el arreglo unique que se agregue
	            unique.push(element.link);
	          }
	          if(element.status >= 400  ){
	           stats.broken = stats.broken+1;
	          }

	          })
	        stats.unique = unique.length;
	        
	        return stats;
	}
}