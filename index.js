#!/usr/bin/env node

//reconocer lo que el usuario ingresa en la línea de comandos, debe poder tomar un
//archivo o una carpeta con archivos, reconoce cuantos readme, verifica si pone
// --validate o --stat si no pone ninguno solo reconoce 1 archivo a md links
// funciona con then y catch entonces si se comunican se cumplen las promesas
// si existe el archivo, tira error, si la ruta no existe tambien

const fs = require("fs");  // importando libreria file system

const mdLinks = require("./md-links"); // importando mi md.links

var markdownLinkExtractor = require("markdown-link-extractor"); // importando libreria extraccion de links (libreria modificada)
var markdown = fs.readFileSync(process.argv[2]).toString();// leyendo contenido en el archivo que pasamos por la linea de comando
var links = markdownLinkExtractor(markdown, process.argv[2]);// una vez que tenemos el contenido completo del archivo se ejecuta markdown

// console.log(fs.existsSync(command));// verifica si la ruta existe
// if(!fs.existsSync(command)){
// 	console.log("la ruta no existe")
// }
// else{
// 	if(fs.lstatSync(command).isFile()){//obtiene el estado del archivo y verifica si es file
// 	 // ejecute md-links
// 	}

// 	if(fs.lstatSync(command).isDirectory()){// obtiene el estado del archivo y verifica si es directorio
// 		const dirCont = fs.readdirSync("./");
// 		const files = dirCont.filter(elem => /.*\.(md)/gi.test(elem));
// 		console.log(files);

// 	 // ejecute md-links por cada uno de los archivos encontrados
// 	}}



// let validate = false
// let stat = false;
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
    console.log("ejecutando validate + stats");
    console.log("Total: " + list.total + " | Unicos: " + list.unique +"| Broken: " + list.broken);
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

    console.log("ejecutando por defecto sin opciones");
  }
});

/*
Promise.all(
  links.map(singleElement => mdLinks.validatef(singleElement, options))
).then(list => {
  //console.log("imprimiendo");

  console.log(list);
  //return list;
});*/

// mdLinks("./some/example.md", { validate: true })
//   .then(links => {
//     // => [{ href, text, file, status, ok }]
//   })
//   .catch(console.error);

// mdLinks("./some/dir")
//   .then(links => {
//     // => [{ href, text, file }]
//   })
//   .catch(console.error);

// console.log(path.isAbsolute(command)); //verifica si es una ruta absoluta
// console.log(path.extname(command));// obtiene la extension del archivo
