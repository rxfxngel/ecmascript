"use strict";

/*
const nombres=['Carlos','Alejandro','Manuel','Cesar'];
const numero_caracteres = nombres.map(function(nombre){
    return `${nombre} tiene ${nombre.length} letras`;
});
console.log(numero_caracteres);
*/
var nombres = ['Carlos', 'Alejandro', 'Manuel', 'Cesar'];
var numero_caracteres = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " letras");
});
console.log(numero_caracteres);