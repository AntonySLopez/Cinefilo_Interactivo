import sql from '../database/db'

async function login(request){
    try{
        const datos = await request.json();
        const { email, password } = datos.body;

        const  result = await sql.query`
                Function_login(${email})        
            `;
        const join = (result.recorset[0].clave === password);
//funcion token para implementar
        if(join){
            const tokem = "1234";
            return new Response(JSON.stringify({
                estatus: 200,
                data: tokem
            }));
        }else{
            return new Response(JSON.stringify({
                estatus: 401,
                error: `password incorrecto`
            }));
        };

    }catch(error){
        return new Response(JSON.stringify({
            estatus: 500,
            error: `Error en base de datos`
        }));
    }
}

export {login};