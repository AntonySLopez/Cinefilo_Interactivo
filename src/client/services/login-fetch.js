export async function loginFecth(email, password){
    try{
        const data  = {
            email: email,
            password: password
        };
        
        const result = await fetch( "/api/login",{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const resultado = await result.json()
        return resultado;
    }catch(error){
        return {
            estatus:500, error: email
        };
    }
;}