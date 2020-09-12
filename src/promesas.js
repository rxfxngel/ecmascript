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