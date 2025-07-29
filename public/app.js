import { loadmovies } from "../src/client/events/home-listenning";
import { btnAction } from "../src/client/events/home-listenning";


document.addEventListener('DOMContentLoaded', ()=>{
    loadmovies()
    btnAction();
})