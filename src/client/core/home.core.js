import { importData } from "../../pages/api/TMDB/fetch";
import { cardRender } from "../dom/home-dom";
import { btnGenerador } from "../dom/home-dom";
// controlador de modal
import { modalInfo } from "../dom/home-dom";
import { modalToggle } from "../dom/home-dom";
import { home } from "../dom/home-dom";
import { dbMovieTemporal } from "../utils/dbTemporal";
import { modalController} from "../logic/home-logic";
import { elementoDom } from "../dom/home-dom";

import { importBusqueda } from "../../pages/api/TMDB/fetch";
import { buscadorInputCheck } from "../logic/home-logic";

import { saveIdMovies } from "../logic/home-logic";
import { loadInfo } from "../dom/home-dom";

//para no mesclar responsabilidades cardRender no me altera
export async function homeRender(contenedor, tipo, page) {
    const datos = await importData(tipo, page);
    saveIdMovies(datos.results, dbMovieTemporal)

    if(datos.status === 500 || datos.message){
        return contenedor.textContent = datos.message || `Error al obtener datos`;
    };

    cardRender(contenedor, datos);
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

// delegacion de evento para informacionde videos
export function onClickInfo(e){
        
    if (e.target.tagName === 'IMG') {

            modalToggle(modalInfo, home);
            modalController.modalActivo = modalInfo;
        // funcionde cargar datos de movieINfo
        const id = e.target.dataset.id;
        loadInfo(id, dbMovieTemporal);     
    }
}
// delegacion de evantos para navegacion en nav
export function navModal(e){

    const btnActivo = e.target.parentElement.dataset;
    console.log(btnActivo);
    if (modalController.modalActivo == btnActivo.href) {
        console.log(`error`);
        return;
    }else{
        modalToggle(modalController.modalActivo, elementoDom[btnActivo.href])
        modalController.modalActivo = elementoDom[btnActivo.href]
    }
    
}
// buscador
export async function buscadorRender(contenedor, page){
    // tipo se implementara en busqueda vanzada
    const valor = contenedor.querySelector("#input-buscador").value;
    const box = contenedor.querySelector("#box-buscador")

    console.log(valor);
    
    if(buscadorInputCheck(valor)){
        return contenedor.textContent = "Ingrese nombre";
    }

    const datos = await importBusqueda(valor, page);

    if(datos.status === 500 || datos.message){
        return contenedor.textContent = datos.message || `Error al obtener datos`;
    };
    
    cardRender(box, datos);

}