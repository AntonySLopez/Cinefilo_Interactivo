import { login } from "../../BackEnd/controller/user";

export const prerender = false;

export async function POST({request}) {
        return login(request);
    }