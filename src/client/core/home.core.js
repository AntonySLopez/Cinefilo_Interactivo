import { cardGenerador } from "../dom/home-dom";
import { importData } from "../../pages/api/TMDB/fetch";

export async function cardRender(contenedor, tipo, page) {
    const datos = await importData(tipo, page);

    if(datos.status === 500 || datos.message){
        return contenedor.textContent = datos.message || `Error al obtener datos`;
    };

    datos.forEach( dato => {
        const card = cardGenerador(dato);
        contenedor.appendChild(card)
    });
}