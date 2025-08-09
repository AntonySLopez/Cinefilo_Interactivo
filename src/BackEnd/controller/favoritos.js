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

        const { userID, movieID, titulo, poster, baner } = data;

        const result = await sql.query`
        BEGIN TRANSACTION;

            DECLARE @favoritos_id INT;

            -- 1️⃣ Obtener el favoritos_id del usuario
            SELECT @favoritos_id = favoritos_id
            FROM favoritos
            WHERE user_id = ${userID};

            -- 2️⃣ Si no existe, crearlo
            IF @favoritos_id IS NULL
            BEGIN
                INSERT INTO favoritos (user_id)
                VALUES (${userID});

                SET @favoritos_id = SCOPE_IDENTITY();
            END

            -- 3️⃣ Verificar si la película existe en Movies
            IF NOT EXISTS (
                SELECT 1 FROM Movies WHERE movie_id = ${movieID}
            )
            BEGIN
                INSERT INTO Movies (movie_id, movie_name, poster, baner)
                VALUES (${movieID}, ${titulo}, ${poster}, ${baner});
            END

            -- 4️⃣ Verificar si ya está en favoritos_items
            IF NOT EXISTS (
                SELECT 1 FROM favoritos_items
                WHERE favoritos_id = @favoritos_id
                AND movie_id = ${movieID}
            )
            BEGIN
                INSERT INTO favoritos_items (favoritos_id, movie_id)
                VALUES (@favoritos_id, ${movieID});
            END

        COMMIT TRANSACTION;
        `;

        console.log(result);

        return new Response(JSON.stringify({
            code: 200,
            message: 'Favorito actualizado con éxito',
        }), { status: 200 });

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({
            code: 500,
            message: 'Error update-favorito en base de datos'
        }), { status: 500 });
    }
}

export { getFavoritos , addFavoritos };
