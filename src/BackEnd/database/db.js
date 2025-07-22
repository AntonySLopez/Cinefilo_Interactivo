import sql from "mssql"

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate:true
    }
};

sql.connect(config)
    .then(()=>{
        console.log(`sql conectado`);
    })
    .catch((error)=>{
        console.log(`erro de coneccion a sql`, error);
    })

export default {sql};