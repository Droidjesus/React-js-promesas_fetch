console.log('hola mundo');

//Funcion para recibir un numero y sumarle un uno.
function fcnSumarUno(numero, fcnResultadoCallBack){
    setTimeout(function(){
    //return numero + 1;
    fcnResultadoCallBack(numero+1);
    }, 800);
}

//Invocar a la funcion
//let Resultado = fcnSumarUno(8);

//invocar a la funcion
fcnSumarUno(7, function(nuevoValor1){
    //Enviar el resultado a consola.
    //console.log("Resultado:", nuevoValor1);
    fcnSumarUno(nuevoValor1, function(nuevoValor2){
        fcnSumarUno(nuevoValor2, function(nuevoValor3){
            fcnSumarUno(nuevoValor3, function(nuevoValor4){
                //Enviar el resultado a consola.
                console.log("Resultado:", nuevoValor4);
            });
        });
    });
});

