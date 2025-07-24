import { updateFavoritos } from "../../../BackEnd/controller/favoritos";

export const prerender = false;

export async function POST({ request }){
    return updateFavoritos(request);
}