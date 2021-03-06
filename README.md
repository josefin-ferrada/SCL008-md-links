# jf-md-Links

## Introduccion

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Md-links lee y analiza archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

## Instrucciones de instalación y uso


Esta librería cuenta con un ejecutable CLI via npm y una interfaz que podra ser importado con require, el detalle de cada uno a continuación.

Instalación vía npm

`npm i jf-md-links`


JavaScript API
Para utilizar este módulo programaticamente deberas importarlo en tu archivo .js así:

`const mdLinks = require('./md-links')`

El módulo ofrece la siguiente interfaz:

![usoBasico](./archivosDePrueba/Modo_de_uso.JPG)

la forma de ingresar la información es llamando al modulo jf-md-links luego ingresando el archivo a analizar 

![pordefecto](./archivosDePrueba/por_defecto.JPG)

La ejecución por defecto muestra información básica de los links extraidos como: ruta del archivo, href y titulo

![stat](./archivosDePrueba/Ejecutando_stat.JPG)

Al ingresar --stat estadisticas generales con respecto a los links extraídos como total de links y unicos

![validate](./archivosDePrueba/Ejecutando_validate.JPG)

Al ingresar --validate se visualiza la ruta, href, status Code, status Text, titulo del archivo

![validateystat](./archivosDePrueba/Ejecutando_validate_y_stat.JPG)

Al ingresar ambas opciones se visualiza estadisticas generales con respecto a los links extraídos como total de links, unicos y rotos. 



## Proceso de planificación y construcción
Comencé realizando la planificación en la sección Project de GitHub, sin embargo, me resultó difícil desglosar lo necesario en cada tarea, por esto, en mi hogar me guié con la estructura dada por la coach en clases. 


![planificacioncasa](./archivosDePrueba/planificacion_casa.jpeg)




### Archivos del proyecto

- `index.js`: Desde este archivo exporto (`mdLinks`).
- `md-links.js`: Este archivo contiene la función a exportar mdlinks que recibe como parámetros el arreglo de links y las opciones ingresadas por el usuario. Esta función ejecuta acciones en base a los parámetros recibidos por la línea de comandos y retorna una promesa con los resultados de la ejecución.
- `logic.js`: Contiene las funciones `optionValidate:` que permite obtener el estado de cada uno de los links. `optionStat: ` que permite obtener la cantidad de links únicos y totales. `optionStatAndValidate: ` que permite obtener la cantidad de links únicos, totales y rotos. Estas funciones son llamadas desde el archivo `md-links.js`.

### RePlanificación

[Trello](https://trello.com/b/L83HSP9J/md-links) 