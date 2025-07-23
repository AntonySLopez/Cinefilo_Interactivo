import sql from '../database/db.js'

// cotroller de login

async function login(request) {
    try {
        const datos = await request.json();
        const { email, password } = datos;

        const result = await sql.query`
                SELECT dbo.Function_login(${email}) AS clave;
            `;
        const clave = result.recordset[0]?.clave;
        if (!clave) {
            return new Response(JSON.stringify({
                estatus: 404,
                error: `Email no encontrado`
            }), { status: 404 });
        }

        const join = (result.recordset[0].clave === password);

        if (join) {
            const token = "1234";
            return new Response(JSON.stringify({
                estatus: 200,
                data: token
            }), { status: 200 });
        } else {
            return new Response(JSON.stringify({
                estatus: 401,
                error: `Password incorrecto`
            }), { status: 401 });
        }

    } catch (error) {
        return new Response(JSON.stringify({
            status: 500,
            error: `Error en base de datos`
        }));
    }
}


// controller de register
    async function register(request) {
    try{
        const datos = await request.json();
        const { name, email, password } = datos;

        const result = await sql.query`
            INSERT INTO usuarios (nombre, correo, contrasena)
            VALUES (${name}, ${email}, ${password})
        `;

        if(result){
            return new Response(JSON.stringify({
                estatus: 200,
                message: "usuario creado"
            }));
        }else{
            return new Response(JSON.stringify({
                estatus: 401,
                error: `error al guardar`
            }));
        };
    }catch(error){
        return new Response(JSON.stringify({
            estatus: 500,
            error: `Error en base de datos`
        }));
    };
 };

export {login, register};