import { buscadorRender } from "../core/buscarPelicula";
import { buscador } from "../dom/buscarPelicula";

export function buscarPelicula(){

    buscador.addEventListener('keydown', (e)=>{
        if (e.key === "Enter"){
            buscadorRender(buscador, 1)
        }
    });
}