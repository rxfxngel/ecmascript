function registrarUsuario(nombre,pais='Sin pais',correo,telefono='No especificado'){
    return `Nombre: ${nombre} , Pais: ${pais}, Correo:${correo},Telefono:${telefono}`;
}

console.log(registrarUsuario("Rafael",undefined,"rx@md.com"));