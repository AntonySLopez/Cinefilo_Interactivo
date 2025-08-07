import { buscadorInputCheck } from "../logic/buscarPelicula";
import { importBusqueda } from "../../pages/api/TMDB/fetch";
import { cardRender } from "../utils/cardRender";

export async function buscadorRender(contenedor, page){
    // tipo se implementara en busqueda vanzada
    const valor = contenedor.querySelector("#buscador").value;
    const box = contenedor.querySelector("#box-buscador")

    if(page === 1){
        box.textContent = "";
    }

    if(!buscadorInputCheck(valor)){
        return contenedor.textContent = "Ingrese nombre";
    }

    const datos = await importBusqueda(valor, page);

    if(datos.status === 500 || datos.message){
        return contenedor.textContent = datos.message || `Error al obtener datos`;
    };
    
    cardRender(box, datos);

}