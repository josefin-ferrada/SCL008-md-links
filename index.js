#!/usr/bin/env node

//reconocer lo que el usuario ingresa en la línea de comandos, debe poder tomar un 
//archivo o una carpeta con archivos, reconoce cuantos readme, verifica si pone
// --validate o --stat si no pone ninguno solo reconoce 1 archivo a md links
// funciona con then y catch entonces si se comunican se cumplen las promesas
// si existe el archivo, tira error, si la ruta no existe tambien




const fs = require('fs');

const mdLinks = require("./md-links");

var markdownLinkExtractor = require("markdown-link-extractor");
var markdown = fs.readFileSync(process.argv[2]).toString();
var links = markdownLinkExtractor(markdown);





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
// 	}

// }

let options = { validate : false , stat : true}

for (let i = 0; i<process.argv.length; i++) {
	

	if(process.argv[i].includes("--validate")){
		console.log("validate")
		validate = true
		Promise.all(links.map(singleElement => mdLinks.validatef(singleElement)))
		.then(
		  list => {
		    //console.log("imprimiendo");

		    console.log(list);
		    //return list;
		  })

	}
	if (process.argv[i].includes("--stat")){
		
		stat = true
		Promise.all(links.map(singleElement => mdLinks.stat(singleElement)))
		.then(
		  list => {
		    //console.log("imprimiendo");
		    //console.log(list);
		    //return list;


		    let stats = {total: 0, unique : 0};

		    stats.total = list.length;

		    var unique = [];

		    list.forEach((element) => {
		      if(!unique.includes(element.link)){
		        unique.push(element.link);
		      }

		      })
		    stats.unique = unique.length;
		    console.log(stats)
		    return stats;

		})
	}
	
}






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