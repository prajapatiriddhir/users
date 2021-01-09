export const userServices = {
    inviteuser
}

function inviteuser(data){
    return fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    }).then((data)=>data.json)

}