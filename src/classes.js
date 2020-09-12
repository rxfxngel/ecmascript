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