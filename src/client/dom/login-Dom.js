    const error = document.querySelector("#error");
export const form = document.querySelector("#login-form");
    const btn = form?.querySelector("#btn-form");
    const label = form?.querySelector("#l-name");
    const inputName = form?.querySelector("#name");

    const btnSwitch = document.getElementById("switch");

    let accion = 'login';

    btnSwitch?.addEventListener('click', () => {
        if (accion === "login") {
            label?.classList.remove("hidden");
            inputName?.classList.remove("hidden");
            btn.textContent = "Register";
            accion = "registro";
        } else {
            label?.classList.add("hidden");
            inputName?.classList.add("hidden");
            btn.textContent = "Login";
            accion = "login";
        }
    });    

export function showError(text){
        error.textContent = text
    }