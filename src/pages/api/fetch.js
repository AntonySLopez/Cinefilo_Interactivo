const valor = {
  "email": "test@correo.com",
  "password": "123456"
}
// fetch de
   async function loginFetch(data) {
        try {
            const peticion = await fetch('http://localhost:4321/api/login', {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify(data)
                
            });

            const resultado = await peticion.json();
            return resultado;
        } catch (error) {
            
            return { estatus: 500, error: error.message }; 
        
            
        }
    };

    loginFetch(valor)