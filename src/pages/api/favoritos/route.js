import { getFavoritos } from "../../../BackEnd/controller/favoritos";

export const prerender = false;

export async function POST({ request }){
        return getFavoritos(request);
    };