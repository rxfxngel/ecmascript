/*
const nombres=['Carlos','Alejandro','Manuel','Cesar'];
const numero_caracteres = nombres.map(function(nombre){
    return `${nombre} tiene ${nombre.length} letras`;
});
console.log(numero_caracteres);
*/

const nombres=['Carlos','Alejandro','Manuel','Cesar'];

const numero_caracteres = nombres.map(nombre=>`${nombre} tiene ${nombre.length} letras`);

console.log(numero_caracteres);