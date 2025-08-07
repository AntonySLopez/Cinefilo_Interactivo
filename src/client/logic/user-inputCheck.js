    export function loginInputCheck(email, password) {
        if (typeof email !== "string" || typeof password !== "string") {
            console.error("Email o password no son correctos");
            return false;
        }

        const emailValid = email.trim().includes("@");
        const passwordValid = password.trim().length > 5;

        if(!name){
            return emailValid && passwordValid;
        }else{
            return emailValid && passwordValid && nameValid;
        }
    };

    export function registerInputCheck(email, password, name) {
        if (typeof email !== "string" || typeof password !== "string" || typeof name !== "string") {
            console.error("uno o mas datos no son correctos");
            return false;
        }

        const nameValid = name.trim().length > 3;
        const emailValid = email.trim().includes("@");
        const passwordValid = password.trim().length > 5;

        return emailValid && passwordValid && nameValid;
    };
