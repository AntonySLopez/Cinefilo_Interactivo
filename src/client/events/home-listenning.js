import { box1, box2, box3, box4, box5 } from "../dom/home-dom";
import { cardRender } from "../core/home.core";
import { btnRender } from "../core/home.core";
import { home } from "../dom/home-dom";
import { modalInfo } from "../dom/home-dom";


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
    home.addEventListener('click', (e) => {
        console.log(`radar 1`);
        console.log(e.target);
        
    if (e.target.tagName === 'IMG' || e.target.tagName === 'BUTTON') {

        home.classList.add("hidden");
        modalInfo.classList.toggle("hidden");
    }
    });
};
