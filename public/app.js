
import { startHome } from "../src/client/events/startHome";
import { infoMovie } from "../src/client/events/detalleDePelicula";
import { navController } from "../src/client/events/navController";
import { buscarPelicula } from "../src/client/events/buscarPelicula";

document.addEventListener('DOMContentLoaded', ()=>{
    startHome()
    infoMovie();
    navController()
    buscarPelicula()
})