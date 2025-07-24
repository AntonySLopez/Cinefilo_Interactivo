import { loginEvent } from "../events/login-form";

export function actionLoginForm(){
    const form = document.querySelector("#login-form");
    form.addEventListener('submit', loginEvent);
}