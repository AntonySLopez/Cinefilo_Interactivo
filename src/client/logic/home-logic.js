export let modalController = {
    modalActivo: "home"
}

export function buscadorInputCheck(input){
    if(!input){
        return false;
    }
    return true;
}