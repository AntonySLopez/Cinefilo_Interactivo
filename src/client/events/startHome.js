import { dataRender } from "../core/startHome";
import { box1, box2, box3, box4, box5 } from "../dom/startHome";
import { btnRender } from "../core/startHome";

export async function startHome(){

    dataRender(box1, "now_playing", '1')
    btnRender(box2, "genre")
    dataRender(box3, "popular", '1')
    dataRender(box4, "now_playing", '1')
    dataRender(box5, "top_rated", '1')
};