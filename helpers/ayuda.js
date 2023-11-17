'use strict'

console.log('Empieza el programa')

// ------------------- VARIABLES GLOBALES ------------------------

// capturamos el formulario de introduccion de socios - Ejercicio 1
const formulario = document.querySelector('#formNombre')

// capturamos el contenedor donde escribiremos los socios - Ejercicio 2
const contenedorEscribirSocios = document.getElementById(
  'contenedorPintarSocios'
)

// TODO: array para añadir los socios
cargarSociosJSON()
// ------------------- FUNCIONES ------------------------

// EJERCICIO 1

/*
  funcion para leer del JSON
*/
function cargarSociosJSON () {
  let path = 'model/datosSocios.json'

  let request = new Request(path, {
    headers: new Headers({
      'Content-Type': 'text/json'
    }),
    method: 'GET'
  })

  fetch(request).then(response => {
    response.json().then(data => {
      console.log('Datos', data)
    })
  })
}

/* 
TODO:  metodo para añadir socios al array 
    cuando arranca la pagina web
*/
function aniadirSociosInicialesArray () {
  //  TODO: cargar el fichero JSON, parsearlo a objetos tipo "socio" y añadirlos al array
}

/*
    TODO: Meotodo para capturar los datos del socio introducidor en el formulario

*/
function capturarDatosSocio () {
  // TODO: recoger los el nombre y apellido del HTML
  // TODO: crear el socio y añadirlo al array
}

/* 
TODO: 
    Metodo para crear un socio pasandole el nombre y el apellido
    y añadirlo al array
 */
function crearSocio (nombre, apellido) {
  // TODO: crear objeto socio
  // TODO: añadir el objeto al array
}

/*
TODOs: 
    Metodo para crear el ID del socio en funcion del ultimo
    ID que hay en el array de socios
*/
function crearID () {
  // TODO: mirar el id del ultimo socio del array y sumarle uno
}

// EJERCICIO 2

/*
  TODO: metodo que elimina la lista previamente pintada en el contenedor asignado 
  para pintar socios, recorre el array con un bucle y pinta los socios 
*/
function pintarListaSocios () {
  //TODO: borramos todo lo que hay en el div
  //TODO: bucle para recorrer y pintar el array de socios
  //TODO: debemos añadir los socios a la pagina web
}

// ------------------- MAIN ------------------------

// TODO: añadimos los socios iniciales cuando empieza el programa

console.log('Acaba el programa')
