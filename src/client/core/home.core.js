import { importData } from "../../pages/api/TMDB/fetch";
import { cardGenerador } from "../dom/home-dom";
import { btnGenerador } from "../dom/home-dom";

//para no mesclar responsabilidades cardRender no me altera
export async function cardRender(contenedor, tipo, page) {
    const datos = await importData(tipo, page);

    if(datos.status === 500 || datos.message){
        return contenedor.textContent = datos.message || `Error al obtener datos`;
    };

    datos.results.forEach( dato => {
        const card = cardGenerador(dato);
        contenedor.appendChild(card)
    });
}

// reder de btn de generos u otros menores que no sean cartas

export async function btnRender(contenedor, tipo) {
    const  datos = await importData(tipo);

    if(datos.status === 500 || datos.message){
        return contenedor.textContent = datos.message || `Error al obtener datos`;
    };

    if(tipo == "genre"){
        datos.genres.forEach( dato =>{
            const btn = btnGenerador(dato);
            contenedor.appendChild(btn);            
        })
    }    
}

