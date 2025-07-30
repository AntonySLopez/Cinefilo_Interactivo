import { box1, box2, box3, box4, box5, cardGenerador } from "../dom/home-dom";
import { homeRender } from "../core/home.core";
import { btnRender } from "../core/home.core";
import { onClickInfo } from "../core/home.core";
import { home } from "../dom/home-dom";
import { navModal } from "../core/home.core";

//nav menu
import { nav } from "../dom/home-dom";

import { buscador } from "../dom/home-dom";
import { buscadorRender } from "../core/home.core";


export async function loadmovies(){

    //llamads a 4 listas de video  popular  top_rated now_playing upcoming
    homeRender(box1, "now_playing", '1')
    btnRender(box2, "genre")
    homeRender(box3, "popular", '1')
    homeRender(box4, "now_playing", '1')
    homeRender(box5, "top_rated", '1')
}

//delegacion de eventos para todo home para desglozar

export function btnAction(){
    home.addEventListener('click', onClickInfo);
};

export function navAction(){
    nav.addEventListener('click', navModal)
};

export function buscadorAction(){

    buscador.addEventListener('keydown', (e)=>{
        if (e.key === "Enter"){
            buscadorRender(buscador, 1)
        }
    });
}