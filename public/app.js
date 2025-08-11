
import { startHome } from "../src/client/events/startHome";
import { infoMovie } from "../src/client/events/detalleDePelicula";
import { navController } from "../src/client/events/navController";
import { buscarPelicula } from "../src/client/events/buscarPelicula";
import { gestionFavoritos } from "../src/client/events/gestionFavoritos";
import { crearListaNueva } from "../src/client/events/crearListaNueva";

document.addEventListener('DOMContentLoaded', ()=>{
    startHome()
    infoMovie();
    gestionFavoritos()
    navController()
    buscarPelicula()
    crearListaNueva()
})