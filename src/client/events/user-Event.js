import Login from '../../pages/login.astro';
import { login, register } from '../core/user-controller.js'
import { form } from '../dom/user-Dom.js';

export function initLogin(){

    form.addEventListener('submit', (event)=>{
        
        const name = form.name.value.trim()

        if(!name){
            login(event);
        }else{
            register(event);
        }
    })
}