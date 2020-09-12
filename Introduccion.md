> # :diamonds: :diamonds: :diamonds: EcmaScript 6 :diamonds: :diamonds: :diamonds:

## Herramientas
- Babel para convertir el codigo de ecmascript 6 a javascript

## Declaracion de variables
|Javascript| EcmaScript |
|--|--|
| usa **var** | usa **let** y **const** |
| podemos redeclarar variables con *var* "variables con el mismo nombre" | let y const no permite  redeclarar variables |
| tiene scope de javascript no podemos acceder a variables creadas dentro de una funcion | tiene scope de javascript pero a nivel de bloque |
| |  las constantes(const) solo son de lectura , constantes de arreglo si pueden modificar sus elementos|
## Concatenar cadenas
``` js
//forma tradicional
console.log('la persona es'+nombre);
//ecmascript
console.log(`la persona ${nombre} tiene ${edad} es de ${pais}`); 
```
## Funciones flecha
``` js

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
```
## Parametros por defecto

``` js
function registrarUsuario(nombre,pais='Sin pais',correo,telefono='No especificado'){
    return `Nombre: ${nombre} , Pais: ${pais}, Correo:${correo},Telefono:${telefono}`;
}

console.log(registrarUsuario("Rafael",undefined,"rx@md.com"));
```
## Destructurar Arreglos

``` js
const persona = ['Rafael',23,'Peru'];

const [nombre,,pais,profesion='No especificado profesion']= persona
console.log(`${nombre} es ${profesion}`);

const mostrarInfo = ([nombrex,,paisx])=>console.log(`${nombrex} es  de ${paisx}`);

mostrarInfo(persona);
```
