
import { startHome } from "../src/client/events/startHome";
import { infoMovie } from "../src/client/events/detalleDePelicula";
import { navController } from "../src/client/events/navController";
import { buscarPelicula } from "../src/client/events/buscarPelicula";
import { gestionFavoritos } from "../src/client/events/gestionFavoritos";

document.addEventListener('DOMContentLoaded', ()=>{
    startHome()
    infoMovie();
    gestionFavoritos()
    navController()
    buscarPelicula()
})