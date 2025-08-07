import { loginInputCheck } from "../logic/login-inputCheck";
import { loginFecth, registerFetch } from "../services/login-fetch";
import { showError } from "../dom/login-Dom";
// importar saveToken() para guardar token de localStorage

export async function login(e) {

    e.preventDefault()
    const form = e.target;

    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const name = form.nombres.value.trim();
    const check = loginInputCheck(email,password);
    console.log(email.length);
    
    if(!check){
        return showError(`Ingrese datos correctos`);
    };
    
    try {
        if(!name){
            const result = await loginFecth(email,password);
            console.log(result)
        }else{
            const result = await registerFetch(name, email, password);
            console.log(result)
        }
        if(result.code === 200){
            console.log(`para implementar: guardar en localStorage`);
            window.location.href = '/'
        }
        if(result.code === 201){
            showError('usuario creado');
            email.value = '';
            email.password = '';
            email.name = '';
            
        }
    } catch (error) {
        showError('Error en servidor')
    }
}
