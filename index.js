#!/usr/bin/env node

//reconocer lo que el usuario ingresa en la línea de comandos, debe poder tomar un 
//archivo o una carpeta con archivos, reconoce cuantos readme, verifica si pone
// --validate o --stat si no pone ninguno solo reconoce 1 archivo a md links
// funciona con then y catch entonces si se comunican se cumplen las promesas
// si existe el archivo, tira error, si la ruta no existe tambien


const mdLinks = require("./src/md-links");