//https://reqres.in/api/users

//funcion Fetch
fetch('https://reqres.in/api/users').then(resp=> resp.json()).then(respObj =>{
            console.log(respObj);
            console.log(respObj.page);
            console.log(respObj.per_page);
            console.log(respObj.data);
});
