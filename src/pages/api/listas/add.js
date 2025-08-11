import { addLista } from "../../../BackEnd/controller/listas";

export const prerender = false;

export async function POST({ request }){
    return addLista(request);
}