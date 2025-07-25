    export function inputCheck(loginEmail, loginPassword) {
        if (typeof loginEmail !== "string" || typeof loginPassword !== "string") {
            console.error("Email o password no son cadenas");
            return false;
        }

        const emailValid = loginEmail.trim().includes("@");
        const passwordValid = loginPassword.trim().length > 5;

        return emailValid && passwordValid;
    }
