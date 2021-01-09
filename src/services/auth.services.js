export const authServices = {
    login
}


function login(data){
    return fetch("https://reqres.in/api/login",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        },
    }).then((data)=>data.json)

}