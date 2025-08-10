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
        const { userId, movieID, titulo, poster, baner } = data;


        // Ejecutamos la query que hace ambas cosas
        const result = await sql.query`
            -- Insertar movie si no existe
            IF NOT EXISTS (SELECT 1 FROM Movies WHERE movie_id = ${movieID})
            BEGIN
                INSERT INTO Movies (movie_id, movie_name, poster, baner)
                VALUES (${movieID}, ${titulo}, ${poster}, ${baner});
            END;

            -- Insertar favorito si no existe relación user-movie
            IF EXISTS (SELECT 1 FROM favoritos_items WHERE user_id = ${userId} AND movie_id = ${movieID})
            BEGIN
                SELECT 'Ya está activo' AS mensaje;
            END
            ELSE
            BEGIN
                INSERT INTO favoritos_items (user_id, movie_id)
                VALUES (${userId}, ${movieID});
                SELECT 'Agregado con éxito' AS mensaje;
            END;
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
            IF EXISTS (SELECT 1 FROM favoritos_items WHERE user_id = ${userId} AND movie_id = ${movieID})
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
