const persona = ['Rafael',23,'Peru'];

const [nombre,,pais,profesion='No especificado profesion']= persona
console.log(`${nombre} es ${profesion}`);

const mostrarInfo = ([nombrex,,paisx])=>console.log(`${nombrex} es  de ${paisx}`);

mostrarInfo(persona);