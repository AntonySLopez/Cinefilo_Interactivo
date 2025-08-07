import { modalInfo } from "../dom/detalleDePelicula";
import { modalController } from "../utils/modalController";
import { dbMovieTemporal } from "../utils/dbTemporal";
import { home } from "../dom/startHome";
import { modalToggle } from "../utils/modalToggle";
import { loadInfo } from "../dom/detalleDePelicula";

export function onClickInfo(e){
        
    if (e.target.tagName === 'IMG') {

        modalToggle(modalInfo, home);
        modalController.modalActivo = modalInfo;
        // funcionde cargar datos de movieINfo
        const id = e.target.dataset.id;
        loadInfo(id, dbMovieTemporal);     
    }
}