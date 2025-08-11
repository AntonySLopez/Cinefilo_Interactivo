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


async function addLista(request) {
    try {
        const data = await request.json();

        const { idUser, nameList } = data

        const res = await sql.query`
            BEGIN TRANSACTION;

            IF EXISTS (
                SELECT 1
                FROM Lists
                WHERE user_id = ${idUser}
                AND name = ${nameList}
            )
            BEGIN
                SELECT 'lista ya existe' AS mensaje;
            END
            ELSE
            BEGIN
                INSERT INTO Lists (user_id, name)
                VALUES (${idUser}, ${nameList});

                SELECT 'lista creada' AS mensaje;
            END

            COMMIT TRANSACTION;
        `;
        const result = await res
        console.log(result.recordset);
        

        return new Response(JSON.stringify({
            code: 200,
            message: 'Nueva lista agregada',
            data:result
        }), { status: 200 });

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({
            code: 500,
            message: 'Error update-listas en base de datos'
        }), { status: 500 });
    }
}



export { getlistas , addLista };
