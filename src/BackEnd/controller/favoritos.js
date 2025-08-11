import sql from "../database/db";

// controller de favorit
async function getFavoritos(request) {
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
            SELECT * FROM favoritos
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

async function addFavoritos(request) {
    try {
        const data = await request.json();
        const { idUser, nameList } = data;


        // Ejecutamos la query que hace ambas cosas
       const result = await sql.query`
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


        // El resultado debería tener el mensaje de la última SELECT
        const mensaje = result.recordset && result.recordset.length > 0 ? result.recordset[0].mensaje : 'Sin resultado';

        return new Response(JSON.stringify({
            code: 200,
            message: mensaje,
        }), { status: 200 });

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({
            code: 500,
            message: 'Error en base de datos'
        }), { status: 500 });
    }
}

async function deleteFavoritos(request) {
    try {
        const data = await request.json();
        const { userId, movieID } = data;

        const result = await sql.query`
            IF EXISTS (SELECT 1 FROM favoritos WHERE user_id = ${userId} AND movie_id = ${movieID})
            BEGIN
                DELETE FROM favoritos_items WHERE user_id = ${userId} AND movie_id = ${movieID};
                SELECT 'Eliminado con éxito' AS mensaje;
            END
            ELSE
            BEGIN
                SELECT 'No existe en favoritos' AS mensaje;
            END
        `;

        const mensaje = result.recordset && result.recordset.length > 0 ? result.recordset[0].mensaje : 'Sin resultados';
console.log(`mensaje`,mensaje);
console.log(result);

        return new Response(JSON.stringify({
            code: 200,
            message: mensaje,
        }), { status: 200 });

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({
            code: 500,
            message: 'Error en base de datos'
        }), { status: 500 });
    }
}

export { getFavoritos , addFavoritos, deleteFavoritos };
