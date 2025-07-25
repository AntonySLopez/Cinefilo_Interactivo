import { loginEvent } from "../events/login-Event";

export function actionLoginForm(){
    const form = document.querySelector("#login-form");
    form.addEventListener('submit', loginEvent);
}