
//Funcion que retorna una promesa y obtiene mas lento el resultado
function fcnSumarLento( numero ){
    /*var promesa = new Promise(function(resolve, reject){
    });
    return promesa;*/
    return new Promise(function(resolve, reject){
        /*if(numero >= 5){
            reject('Sumar lento fallo');
        }*/
        setTimeout(function(){
            resolve(numero+1);
        },800);
    });
}

//Funcion que retorna una promesa y obtiene mas rapido el resultado
let fcnSumarRapido = (numero)=>{
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            //resolve(numero+1);
            reject('Error en la promesa de la funcion Sumar Rapido');
        }, 1000);
    });
}

//Promise.race
Promise.race([fcnSumarLento(4), fcnSumarRapido(8)]).then(respuesta =>{
    console.log('Respuesta:', respuesta);
}).catch(error=>{
    console.log("Error en la respuesta de la promesa: ", error);
});


