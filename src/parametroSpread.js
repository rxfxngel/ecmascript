//parametros spread
const mostrarDatos=(...datos)=>{
    console.log(datos);
}

const arregloDatos=[ 'Rafael2',27,'sadasd@gmail.com','Peru'];

mostrarDatos(...arregloDatos);