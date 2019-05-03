#!/usr/bin/env node


// importar librerias necesarias
const fs = require("fs");  
const mdLinks = require("./src/md-links"); 
var markdownLinkExtractor = require("markdown-link-extractor"); 
var path = require("path");
const FileHound = require('filehound');



// verifica si la ruta existe
if(!fs.existsSync(process.argv[2])){
  console.log("la ruta no existe")
  
}else if(fs.lstatSync(process.argv[2]).isDirectory()){
 console.log("entrando a directorio")
const files = FileHound.create()
  .paths(process.argv[2])
  .ext('md')
  .find();
 
  files
  .then(res => {
    let  ar = [];  
    console.log(res)
    res.forEach(element => {
      let normalize = path.normalize(element);
      ar.push(normalize)
      console.log(normalize)
    })

    console.log(ar)
  });

}else if (path.extname(process.argv[2]) !== ".md"){
  console.log("archivo con extension incorrecta, especifique archivo con extension .md")

}else{
  var markdown = fs.readFileSync(process.argv[2]).toString();// leyendo contenido en el archivo que pasamos por la linea de comando
  var links = markdownLinkExtractor(markdown, path.resolve(process.argv[2]));// una vez que tenemos el contenido completo del archivo se ejecuta markdown

  let options = { validate: false, stat: false };  

  for (let i = 0; i < process.argv.length; i++) {
    //console.log(process.argv[i]);

    if (process.argv[i].includes("--validate")) {
      options.validate = true;
    }
    if (process.argv[i].includes("--stat")) {
      options.stat = true;
    }
  }

  mdLinks(links, options) // md-links recibe links de markdown extractor y options con validaciones a continuacion y en cada una lo que muestro por consola

  .then(list => {
    if (options.validate && options.stat) {
      
      console.log("Total: " + list.total + " | Unique: " + list.unique +"| Broken: " + list.broken);
      return list; // muestro un objeto con sus propiedades 

    } else if (options.validate) {
      list.forEach(element => {
        console.log(
          element.path +
            " " +
            element.link +
            " " +
            element.statustext +
            " " +
            element.status +
            " " +
            element.title
        );
      });
    } else if (options.stat) {
      console.log("Total: " + list.total + " | Unicos: " + list.unique);
    } else {
      list.forEach(element => {
        console.log(
          element.path +
            " " +
            element.link +
            " " +
            element.titulo
        );
      });

      
    }
  });

}
