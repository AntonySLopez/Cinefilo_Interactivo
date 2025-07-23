
import { register } from "../../BackEnd/controller/user";

export const prerender = false;

    export async function POST({request}) {
        return register(request);
        
    }