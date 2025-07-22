import { login } from "../../BackEnd/controller/user";

export async function POST({request}) {
        return login(request);
    }