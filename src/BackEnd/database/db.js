import mssql from "mssql"


const config = {
    user: import.meta.env.DB_USER,
    password: import.meta.env.DB_PASSWORD,
    server: import.meta.env.DB_SERVER,
    database: import.meta.env.DB_DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate:true
    }
};

mssql.connect(config)
    .then(()=>{
        console.log(`sql conectado`);
    })
    .catch((error)=>{
        console.log(`erro de coneccion a sql`, error);
    })

const sql = await mssql.connect(config);

export default sql;