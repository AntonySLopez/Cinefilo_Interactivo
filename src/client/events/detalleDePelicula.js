import { onClickInfo } from "../core/detalleDePelicula";
import { home } from "../dom/startHome";

export function infoMovie() {
    home.addEventListener('click', onClickInfo)
};