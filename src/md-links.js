


module.exports = function executor(objectlink, options) {
  if (options.validate && options.stat) {
    console.log("ejecutando validate + stats");
    return new Promise(function(resolve, reject) {
      Promise.all(
        objectlink.map(singleElement => optionValidate(singleElement))
      ).then(list => {
        console.log("imprimiendo...");
        resolve(optionStatAndValidate(list));
      });
    });

  } else if (options.validate) {
    console.log("ejecutando solo validate...");
    return new Promise(function(resolve, reject) {
      Promise.all(
        objectlink.map(singleElement => optionValidate(singleElement))
      ).then(list => {
        console.log("imprimiendo...");
        resolve(list);
      });
    });
  } else if (options.stat) {
    console.log("ejecutando solo stat...");
    return new Promise(function(resolve, reject) {
      resolve(optionStat(objectlink));
    });
  } else {
    console.log("ejecutando por defecto sin opciones");
    return new Promise(function(resolve, reject) {
      resolve(objectlink);
    });
  }
};

