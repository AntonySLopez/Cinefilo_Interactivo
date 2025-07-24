import { getlistas } from "../../../BackEnd/controller/listas";

export const prerender = false;

export async function POST({ request }) {
    return getlistas(request);
}