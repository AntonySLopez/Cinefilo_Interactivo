    export const home = document.getElementById("home");

    export const box1 = home.querySelector("#box1");
    export const box2 = home.querySelector("#box2");
    export const box3 = home.querySelector("#box3");
    export const box4 = home.querySelector("#box4");
    export const box5 = home.querySelector("#box5");

    //funcion para mostrar btn de genero

    export function btnGenerador(data){
        const { id, name } = data;

        let btn = document.createElement("button");
        btn.textContent = name;
        btn.setAttribute("idGenero", id);
        btn.className = ("text-black bg-white p-2 rounded-xl w-auto flex items-center whitespace-nowrap");
        return btn;
    }