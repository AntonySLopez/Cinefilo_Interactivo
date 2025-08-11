import { addList } from "../core/crearListaNueva";
import { btnAddList } from "../dom/crearListaNueva";

export function crearListaNueva(){
    btnAddList.addEventListener('click', addList)
}