'use strict'

console.log('Empieza el programa')

// ------------------- VARIABLES GLOBALES ------------------------

// capturamos el formulario de introduccion de socios - Ejercicio 1
const formulario = document.querySelector('#formNombre')

// capturamos el contenedor donde escribiremos los socios - Ejercicio 2
const contenedorEscribirSocios = document.getElementById('contenedorPintarSocios')


// TODO: array para añadir los socios
var arraySocios = [];

// ------------------- FUNCIONES ------------------------
// EJERCICIO 1
/*
  funcion para leer del JSON
*/
function cargarSociosJSON () {
  let path = './app/Model/datosSocios.json'

  let request = new Request(path, {
    headers: new Headers({
      'Content-Type': 'text/json'
    }),
    method: 'GET'
  })

  fetch(request).then(response => {
     response.json().then(data => {
      console.log('Datos', data)
      aniadirSociosInicialesArray(data)
    })
    
  })
}

/* 
TODO:  metodo para añadir socios al array 
    cuando arranca la pagina web
*/
function aniadirSociosInicialesArray (data) {
  //  TODO: cargar el fichero JSON, parsearlo a objetos tipo "socio" y añadirlos al array


for(const dato of data){
  const nuevoSocio = new Socio(dato.id,dato.nombre,dato.apellido);
  arraySocios.push(nuevoSocio);
  }
}

/*
    TODO: Meotodo para capturar los datos del socio introducidor en el formulario
  
*/
function capturarDatosSocio () {
  // TODO: recoger los el nombre y apellido del HTML
  const nombre = formulario.querySelector('#fnombre').value
  const apellido = formulario.querySelector('#fapellido').value

  // TODO: crear el socio y añadirlo al array
  var socioN = crearSocio(nombre,apellido);
  arraySocios.push(socioN)

}

/* 
TODO: 
    Metodo para crear un socio pasandole el nombre y el apellido
    y añadirlo al array
 */
    function crearSocio (nombre, apellido) {
      // TODO: crear objeto socio
      var id = crearID()


      const nuevoSocio = new Socio(id,nombre,apellido);
      
      return nuevoSocio;
    }
    
/*
TODO: 
    Metodo para crear el ID del socio en funcion del ultimo
    ID que hay en el array de socios
*/
function crearID () {
  // TODO: mirar el id del ultimo socio del array y sumarle uno

  const ultimo = arraySocios[arraySocios.length - 1]
  var id = ultimo.id

  return id+1;
}

// EJERCICIO 2

/*
  TODO: metodo que elimina la lista previamente pintada en el contenedor asignado 
  para pintar socios, recorre el array con un bucle y pinta los socios 
*/
function pintarListaSocios () {

  const espacioElemento = document.createElement('br')
  const style = document.createElement('style')

  style.textContent= `
    #contenedorPintarSocios {
      margin: 0 auto;
      width: 450px;
      height: auto;
      border-radius: 8px;
      margin: 2% auto;
      padding: 2%;
      background-image: linear-gradient(-225deg, #FFE6FA 50%, #E3FDF5  50%);
      box-shadow: 0 9px 50px hsla(20, 67%, 75%, 0.31);
  }`;

    //TODO: borramos todo lo que hay en el div
  contenedorEscribirSocios.innerHTML = '';

    //TODO: bucle para recorrer y pintar el array de socios

  for(let i of arraySocios) {
    const nuevoElemento = document.createElement('div');
    
    nuevoElemento.textContent=`Socio numero ${i.id}: ${i.nombre} ${i.apellido} `
    contenedorEscribirSocios.appendChild(style)
    contenedorEscribirSocios.appendChild(nuevoElemento)
    contenedorEscribirSocios.appendChild(espacioElemento)  
  }
}

// ------------------- MAIN ------------------------

// TODO: añadimos los socios iniciales cuando empieza el programa

cargarSociosJSON()

class Socio {
  constructor(id,nombre,apellido){
    this.id = id;
    this.nombre = nombre,
    this.apellido = apellido
  }
}

console.log('Acaba el programa')
 
 







