"use strict";

var crearObjeto = function crearObjeto(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
    mostrarInfo: function mostrarInfo() {
      return "".concat(nombre, " tiene ").concat(edad);
    }
  };
};

console.log(crearObjeto('Rafa', 23).mostrarInfo());