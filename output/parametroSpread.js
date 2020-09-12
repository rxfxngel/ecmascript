"use strict";

//parametros spread
var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos);
};

var arregloDatos = ['Rafael2', 27, 'sadasd@gmail.com', 'Peru'];
mostrarDatos.apply(void 0, arregloDatos);