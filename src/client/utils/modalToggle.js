let modalvisible = null;
let modalOculto = null;

export function modalToggle(modalActivo, modalOcultar){

    console.log(modalOcultar);
    
        modalOcultar.classList.toggle("hidden");
        modalActivo.classList.toggle("hidden");
    }