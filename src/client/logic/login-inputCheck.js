    export function loginInputCheck(email, password, name = null) {
        if (typeof email !== "string" || typeof password !== "string") {
            console.error("Email o password no son correctos");
            return false;
        }

        const emailValid = email.trim().includes("@");
        const passwordValid = password.trim().length > 5;
        const nameValid = name.trim().length>5;

        if(!name){
            return emailValid && passwordValid;
        }else{
            return emailValid && passwordValid && nameValid;
        }
    };
