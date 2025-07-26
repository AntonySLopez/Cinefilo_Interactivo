    const error = document.querySelector("#error");
export const form = document.querySelector("#login-form");
    let email = form.email.value;
    let password = form.password.value;

    console.log(email.length);
    
    export function showError(text){
        error.textContent = text
    }