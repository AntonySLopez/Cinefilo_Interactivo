import { importData } from "../../pages/api/TMDB/fetch";
import { cardRender } from "../utils/cardRender";
import { btnGenerador } from "../dom/startHome";
import { dbMovieTemporal } from "../utils/dbTemporal";
import { saveIdMovies } from "../logic/startHome";
import { modalController } from "../utils/modalController";

export async function dataRender(contenedor, tipo, page) {

    const datos = await importData(tipo, page);
    saveIdMovies(datos.results, dbMovieTemporal)

    if(datos.status === 500 || datos.message){
        return contenedor.textContent = datos.message || `Error al obtener datos`;
    };

    cardRender(contenedor, datos);
}

console.log(`modal controlador`,modalController.modalActivo);


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
