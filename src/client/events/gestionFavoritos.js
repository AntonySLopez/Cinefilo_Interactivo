import { favoritos } from "../dom/gestionFavoritos-dom";
import { actionFavoritos } from "../core/gestionFavoritos-core";

export function gestionFavoritos(){

    favoritos.addEventListener('click', ()=>{

        actionFavoritos();
    })
}