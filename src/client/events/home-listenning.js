import { cardRender } from "../core/home.core";
import { box1, box2, box3, box4, box5 } from "../dom/home-dom";

export async function loadPopular(){

    //llamads a 4 listas de video  popular  top_rated now_playing upcoming
    cardRender(box1, "now_playing", '1')
    cardRender(box3, "popular", '1')
    cardRender(box4, "now_playing", '1')
    cardRender(box5, "top_rated", '1')
}