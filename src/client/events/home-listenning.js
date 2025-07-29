import { box1, box2, box3, box4, box5 } from "../dom/home-dom";
import { cardRender } from "../core/home.core";
import { btnRender } from "../core/home.core";
import { onClickInfo } from "../core/home.core";

export async function loadmovies(){

    //llamads a 4 listas de video  popular  top_rated now_playing upcoming
    cardRender(box1, "now_playing", '1')
    btnRender(box2, "genre")
    cardRender(box3, "popular", '1')
    cardRender(box4, "now_playing", '1')
    cardRender(box5, "top_rated", '1')
}

//delegacion de eventos para todo home para desglozar

export function btnAction(){
    home.addEventListener('click', onClickInfo );
};
