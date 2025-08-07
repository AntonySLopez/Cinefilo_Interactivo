import sql from '../database/db.js'

// cotroller de login

async function login(request) {
    try {
        const datos = await request.json();
        const { email, password } = datos;

        const result = await sql.query`
                select password AS clave
                from Users
                where email = ${email}
            `;
        const clave = result.recordset[0]?.clave;
        if (!clave) {
            return new Response(JSON.stringify({
                code: 404,
                message: `Email no encontrado`
            }), { status: 404 });
        }

        const join = (result.recordset[0].clave === password);

        if (join) {
            const token = "1234";
            return new Response(JSON.stringify({
                code: 200,
                token: token
            }), { status: 200 });
        } else {
            return new Response(JSON.stringify({
                code: 401,
                message: `Password incorrecto`
            }), { status: 401 });
        }

    } catch (error) {
        return new Response(JSON.stringify({
            code: 500,
            message: `Error en base de datos`
        }), { status: 500 });
    }
}


// controller de register
    async function register(request) {
    try{
        const datos = await request.json();
        const { name, email, password } = datos;

        const result = await sql.query`
            BEGIN TRANSACTION;

                INSERT INTO Users (name, email, password)
                VALUES (${name}, ${email}, ${password});

                DECLARE @newUserId INT = SCOPE_IDENTITY();

                INSERT INTO favoritos (user_id)
                VALUES (@newUserId);

            COMMIT TRANSACTION;
        `;

        if(result){
            return new Response(JSON.stringify({
                code: 201,
                message: "Usuario creado"
            }),{ status:200 });
        }else{
            return new Response(JSON.stringify({
                code: 401,
                message: `Error al guardar`
            }),{ status: 401 });
        };
    }catch(error){
        return new Response(JSON.stringify({
            code: 500,
            message: `Error en base de datos`
        }),{ status:500 });
    };
 };

export {login, register};