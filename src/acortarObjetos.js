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