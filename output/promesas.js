"use strict";

var promesa = new Promise(function (resolve, reject) {
  //Accion que se ejecutara
  setTimeout(function () {
    var exito = true;

    if (exito) {
      resolve('good');
    } else {
      reject('bad');
    }
  }, 4000);
});
promesa.then(function (mssg) {
  alert(mssg);
})["catch"](function (mssg) {
  alert(mssg);
});