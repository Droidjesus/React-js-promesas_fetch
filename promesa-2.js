//Enviar a la consola "Hola mundo".
console.log('¡Hola Mundo!');
//Funcion que recibe un numero y le suma un uno
function fcnSumarUno(numero, fcnResultadoCallBack){
        setTimeout(function(){
            fcnResultadoCallBack(numero+1);
        }, 800);
}

//Funcion que recibe un numero y le suma un uno
function fcnSumarUno(numero){
    var promesa1 = new Promise(function(resolve, reject){
        if(numero >= 7){
            reject('El numero ya es muy alto');
        }
        setTimeout(function(){
            resolve(numero+1);
        }, 800);
    });
    return promesa1
}



//llamada a la funcion promesa1
/*fcnSumarUno(8).then(function(nuevonumero){
    console.log(nuevonumero);
})*/


//llamada a la funcion promesa de forma
//recursiva de manera encadenada
/*fcnSumarUno(3).then(nuevoNumero=>{
    console.log("Resultado:",nuevoNumero);
    return fcnSumarUno(nuevoNumero);
}).then(nuevoNumero=>{
    console.log("Resultado:",nuevoNumero);
    return fcnSumarUno(nuevoNumero);
}).then(nuevoNumero=>{
    console.log("Resultado:",nuevoNumero);
});*/

fcnSumarUno(5)
    .then(fcnSumarUno)
    .then(fcnSumarUno)
    .then(nuevoNumero=>{
    console.log("Resultado:",nuevoNumero);
})
.catch(error=>{
    console.log('Error en la Promesa', error);
})