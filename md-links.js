
const logic = require("./src/logic.js")

//funcion que devuelve una promesa con la ejecución de cada funcion de logic.js, tomando los links desde markdown y las opciones ingresadas en cli (escuchadas por index.js)

module.exports = function mdLinks(objectlink, options) {
  if (options.validate && options.stat) {
    console.log("ejecutando validate + stats");
    return new Promise(function(resolve, reject) {
      Promise.all(
        objectlink.map(singleElement => logic.optionValidate(singleElement))
      ).then(list => {
        console.log("imprimiendo...");
        resolve(logic.optionStatAndValidate(list));
      })
      .catch(err => {
          reject(err); 
        })
    });

  } else if (options.validate) {
    console.log("ejecutando solo validate...");
    return new Promise(function(resolve, reject) {
      Promise.all(
        objectlink.map(singleElement => logic.optionValidate(singleElement))
      ).then(list => {
        console.log("imprimiendo...");
        resolve(list);
      })
       .catch(err => {
          reject(err); 
        })

    });
  } else if (options.stat) {
    console.log("ejecutando solo stat...");
    return new Promise(function(resolve, reject) {
      resolve(logic.optionStat(objectlink));
    });
  } else {
    console.log("ejecutando por defecto sin opciones");
    return new Promise(function(resolve, reject) {
      resolve(objectlink);
    });
  }
};

//
