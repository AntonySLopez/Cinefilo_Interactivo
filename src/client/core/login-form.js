import { inputCheck } from "../logic/login-form";
import { loginFecth } from "../services/login-form";

export async function loginController(email, password){
    const esValido = inputCheck(email, password);
    if(!esValido){
        return console.log(`Datos no validos`);
        
    }

    const respuesta = await loginFecth(email, password);
    console.log(`res de fetch: ${respuesta.code, respuesta.data}`);
    
}