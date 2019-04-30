const logic = require("./logic.js");


module.exports = function executor(objectlink, options) {
  if (options.validate && options.stat) {
    
    return new Promise(function(resolve, reject) {
      Promise.all(
        objectlink.map(singleElement => logic.optionValidate(singleElement))
      ).then(list => {
        
        resolve(logic.optionStatAndValidate(list));
      });
    });

  } else if (options.validate) {
    
    return new Promise(function(resolve, reject) {
      Promise.all(
        objectlink.map(singleElement => logic.optionValidate(singleElement))
      ).then(list => {
        
        resolve(list);
      });
    });
  } else if (options.stat) {
 
    return new Promise(function(resolve, reject) {
      resolve(logic.optionStat(objectlink));
    });
  } else {
    
    return new Promise(function(resolve, reject) {
      resolve(objectlink);
    });
  }
};

