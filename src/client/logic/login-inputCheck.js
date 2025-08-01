    export function loginInputCheck(email, password) {
        if (typeof email !== "string" || typeof password !== "string") {
            console.error("Email o password no son correctos");
            return false;
        }

        const emailValid = email.trim().includes("@");
        const passwordValid = password.trim().length > 5;

        return emailValid && passwordValid;
    }
