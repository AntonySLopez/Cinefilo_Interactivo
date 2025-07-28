import { cardRender } from "../core/home.core";
import { contenedor } from "../dom/home-dom";

export function loadPopular(){
    cardRender(contenedor, "popular", "1")
}