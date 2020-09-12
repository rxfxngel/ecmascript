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