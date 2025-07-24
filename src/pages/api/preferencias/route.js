import { getpreferencias } from "../../../BackEnd/controller/perferencias";

export const prerender = false; 

export async function POST({ request }) {
    return getpreferencias(request);
}