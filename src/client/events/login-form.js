import { loginController } from "../core/login-form"

export function loginEvent(e){
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginController(email, password);
}