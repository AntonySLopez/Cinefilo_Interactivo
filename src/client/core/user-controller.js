import { loginInputCheck } from "../logic/user-inputCheck";
import { loginFecth, registerFetch } from "../services/user-fetch";
import { showError } from "../dom/user-Dom";
// importar saveToken() para guardar token de localStorage

export async function login(e) {

    e.preventDefault()
    const form = e.target;

    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const check = loginInputCheck(email,password);
    console.log(email.length);
    
    if(!check){
        return showError(`Ingrese datos correctos`);
    };
    
    try {
        
        const result = await loginFecth(email,password);
        console.log(result)
        
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

export async function register(e) {

    e.preventDefault()
    const form = e.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const check = loginInputCheck(email, password, name);
    console.log(email.length);
    
    if(!check){
        return showError(`Ingrese datos correctos`);
    };
    
    try {
        
        const result = await registerFetch(email, password, name);
        console.log(result)
        
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