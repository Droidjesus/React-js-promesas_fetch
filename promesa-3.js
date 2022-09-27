
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
            resolve(numero+1);
        }, 800);
    });
}

//llamada a la funcion sumar lento y su promesa
/*fcnSumarLento(6).then(respuesta=>{
    console.log('Respuesta Lenta:', respuesta);
});

//llamada a la funcion sumar rapido y su promesa
fcnSumarRapido(4).then(respuesta=>{
    console.log('Respuesta Rapida:', respuesta);
});*/


let arregloVarios = [fcnSumarLento(7), fcnSumarRapido(10), true, '¡Hola mundo!'];

//Invocacion de las 2 funciones y sus promesas correspondientes al mismo tiempo
Promise.all(arregloVarios).then(respuestas=>{
    console.log('Respuestas:', respuestas);
}).catch(error=>{
    console.log("Error en todas las promesas: ", error);

});