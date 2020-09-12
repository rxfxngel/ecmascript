"use strict";

var texto = 'Hola Mundo'; //comprobar letra de inicio

console.log(texto, 'empieza con h:', texto.toLocaleLowerCase().startsWith('h')); //comprobar letra de fin

console.log(texto, 'termina con o:', texto.toLocaleLowerCase().endsWith('o')); //ver si la cadena de texto incluye otra

console.log(texto, 'incuye carlos:', texto.includes('carlos')); //ver si un arreglo incluye un elemento

var amigos = ['carlos', 'alejandro', 'cesar', 'manuel'];
console.log(amigos.includes('manuel')); //buscar un elemento

console.log(amigos.find(function (amigo) {
  return amigo.length > 6;
})); //buscar un indice

console.log(amigos.findIndex(function (amigo) {
  return amigo === 'manuel';
}));