import { login } from '../core/login-controller.js'
import { form } from '../dom/login-Dom.js';

export function initLogin(){
    form.addEventListener("submit", login);
}