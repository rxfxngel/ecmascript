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
## Destructurar Objetos
``` js
const usuario = {
    nombre :'Rafael',
    correo: 'rafa@gmail.com',
    edad:27,
    pais:'Peru',
    profesion:'Desarrollador'
}

const {nombre,pais,profesion='no especificado'} = usuario;

const mostrarInfo= ({nombre,profesion}) =>console.log(`${nombre} es ${profesion}`);
mostrarInfo(usuario);
```
## Clases y herencia
``` js
class Usuario{
    constructor(nombre,edad,correo){
        this.nombre=nombre;//atributo
        this.edad=edad;
        this.correo=correo;
    }

    mostrarSaludo(){//metodo
        return "hola";
    }
    mostrarInfo(){
        return `
            Nombre: ${this.nombre} <br>
            Edad: ${this.edad} <br>
            Correo: ${this.correo} <br>
            <hr>
        `
    }
}

const carlos = new Usuario('juan',22,'fq@gmail.com');

console.log(carlos.nombre,carlos.edad);

console.log(carlos.mostrarSaludo());

document.write(carlos.mostrarInfo());

const pepe = new Usuario('pepe',25,'pp@gmail.com');
document.write(pepe.mostrarInfo());





class Estudiante extends Usuario{
    constructor(nombre,edad,correo,carrera){
        super(nombre,edad,correo);
        this.carrera=carrera;
    }

    mostrarInfo(){
        return `
            Nombre: ${this.nombre} <br>
            Edad: ${this.edad} <br>
            Correo: ${this.correo} <br>
            Correo: ${this.carrera} <br>
            <hr>
        `
    }
}

const rafa = new Estudiante('rafa',20,'sadsad@gmail.com','biomedico');
document.write(rafa.mostrarInfo());
```
## Nuevas formas de trabajar con objetos
``` js
const crearObjeto=(nombre,edad)=>{
    return {
        nombre,
        edad,
        mostrarInfo(){
            return `${nombre} tiene ${edad}`;
        }
    }
}

console.log(crearObjeto('Rafa',23).mostrarInfo());
```


## Parametros rest y spread
``` js
//parametro rest
const mostrarDatos=(...datos)=>{
    console.log(datos);
}

mostrarDatos('Rafael',27,'sadasd@gmail.com','Peru');

//parametros spread
const mostrarDatos=(...datos)=>{
    console.log(datos);
}

const arregloDatos=[ 'Rafael2',27,'sadasd@gmail.com','Peru'];

mostrarDatos(...arregloDatos);
```

## Promesas
``` js
const promesa = new Promise((resolve,reject)=>{
    //Accion que se ejecutara
    setTimeout(() => {
        const exito=true;
        if(exito){
            resolve('good');
        }else{
            reject('bad');
        }
    }, 4000);
});

promesa.then((mssg)=>{
    alert(mssg);
}).catch((mssg)=>{
    alert(mssg);
});
```


## Nuevos Métodos para Cadenas de Texto y Arreglos
``` js
const texto= 'Hola Mundo';
//comprobar letra de inicio
console.log(texto,'empieza con h:', texto.toLocaleLowerCase().startsWith('h'));
//comprobar letra de fin
console.log(texto,'termina con o:', texto.toLocaleLowerCase().endsWith('o'));
//ver si la cadena de texto incluye otra
console.log(texto,'incuye carlos:',texto.includes('carlos'));
//ver si un arreglo incluye un elemento
const amigos=['carlos','alejandro','cesar','manuel'];
console.log(amigos.includes('manuel'));
//buscar un elemento
console.log(amigos.find(amigo=> amigo.length>6));
//buscar un indice
console.log(amigos.findIndex(amigo=>amigo==='manuel'));

```

##  Instalando y Configurando Webpack con Babel
`se encarga de fusionar varios archivos en una linea de codigo para importarlo`
### Instalando
```
npm install --save-dev webpack
```
### Instalando cliente
```
npm install --save-dev webpack-cli
```
### Configurar el package.json del proyecto
```
{
  "devDependencies": {
    "@babel/cli": "^7.11.6",
    "@babel/core": "^7.11.6",
    "@babel/preset-env": "^7.11.5",
    "webpack": "^4.44.1",
    "webpack-cli": "^3.3.12"
  },
  "scripts": {
    "build":"webpack",
    "build-babel": "babel src -d output --watch"
  }
}
```

### Crear archivo webpack.config.js en la raiz
``` js
const path = require('path');

module.exports = {
  entry: './src/app.js',//archivo donde se fusionaran los demas js
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/'/*aca se pone la ruta de salida*/),//join para unir rutas
  },
};

```
### Instalar babel loader si no se instalo
```
npm install --save-dev babel-loader
```

### Modificar archivo webpack.config.js en la raiz
``` js
const path = require('path');

module.exports = {
  entry: './src/app.js',//archivo donde se fusionaran los demas js
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/'/*aca se pone la ruta de salida*/),//join para unir rutas
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
```
