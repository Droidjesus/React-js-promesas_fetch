console.log("¡Hola Mundo!");

var request = new XMLHttpRequest();

request.open('GET', 'https://reqres.in/api/users', true);

request.send(null);

request.onreadystatechange = function(state){
    if(request.readyState === 4){
        //La respuesta obtiene un string
        var resp = request.response;
        //Transforma la cadena en formato
        var respObj =  JSON.parse(resp);
        //Enviar resultado a consola
        console.log(respObj);
        //Obtener solo la pagina actual
        console.log(respObj.page);
        //Obtener solo la data de los usuarios
        console.log(respObj.data);
    }
}