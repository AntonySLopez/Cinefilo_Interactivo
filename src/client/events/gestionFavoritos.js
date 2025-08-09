import { favoritos } from "../dom/gestionFavoritos-dom";
import { actionFavoritos } from "../core/gestionFavoritos-core";

export function gestionFavoritos(){

    favoritos.addEventListener('click', (e)=>{
        console.log(e);
        

        const estado = favoritos.dataset.favorito;
        console.log(estado);
        
        if(estado == "true"){
            actionFavoritos(true);
        }else{
            actionFavoritos(false);
        }
    })
}