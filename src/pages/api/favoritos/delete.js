import { deleteFavoritos } from "../../../BackEnd/controller/favoritos";

export const prerender = false;

export async function DELETE({ request }){
    return deleteFavoritos(request);
}