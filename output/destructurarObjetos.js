"use strict";

var usuario = {
  nombre: 'Rafael',
  correo: 'rafa@gmail.com',
  edad: 27,
  pais: 'Peru',
  profesion: 'Desarrollador'
};
var nombre = usuario.nombre,
    pais = usuario.pais,
    _usuario$profesion = usuario.profesion,
    profesion = _usuario$profesion === void 0 ? 'no especificado' : _usuario$profesion;

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre,
      profesion = _ref.profesion;
  return console.log("".concat(nombre, " es ").concat(profesion));
};

mostrarInfo(usuario);