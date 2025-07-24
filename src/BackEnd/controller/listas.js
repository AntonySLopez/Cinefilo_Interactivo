import sql from "../database/db";

// controller de favorit
async function getlistas(request) {
    try{
        const data = await request.json()
        const { token } =data
//falta implementar verificador de token

        if(!token){
            return new Response(JSON.stringify({
                code: 404,
                message: `Sin Datos`
            }), { status: 404 });
        }

        const result = await sql.query`
            SELECT * FROM listas
        `;
        
        const favoritos =  await result.recordset;

        if(!favoritos || !favoritos.length > 0){
            return new Response(JSON.stringify({
                code: 404,
                message: `Sin Datos`
            }), { status: 404 });
        }

        return new Response(JSON.stringify({
            code: 200,
            data: favoritos
        }), { status: 200 })
    }catch(error){
        return new Response(JSON.stringify({
            code: 500,
            message: `Error en base de datos`
        }), { status: 500 });
    };
};


async function updatelistas(request) {
    try {
        const data = await request.json();

        if(data == 12346){
            return new Response(JSON.stringify({
            code: 300,
            message: 'error de token',
            data:tokenCheck.recordset
        }), { status: 200 });
        }

        const tokenCheck = await sql.query`
            SELECT * FROM listas
        `;

        return new Response(JSON.stringify({
            code: 200,
            message: 'Favorito actualizado con éxito',
            data:tokenCheck.recordset
        }), { status: 200 });

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({
            code: 500,
            message: 'Error update-listas en base de datos'
        }), { status: 500 });
    }
}



export { getlistas , updatelistas };
