import {mensajeAlerta,saludo} from './modulos/mensajeAlerta';
import Persona from './modulos/clasePersona';
mensajeAlerta("hola mundo");
saludo();

const rafa = new Persona('Rafael',27);
rafa.mostrarInfo();