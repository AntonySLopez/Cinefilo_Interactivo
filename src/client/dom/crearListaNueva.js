export const inputNewLIst = document.getElementById("newList");
export const listBox = document.getElementById("listBox");
export const btnAddList = document.getElementById("addList");

export function addNewList (ubicacion, name){
    const btn = document.createElement("button");

    btn.textContent = name;
    btn.className = ("text-white bg-black p-2 rounded-xl w-auto flex items-center whitespace-nowrap border rounded-xl mx-2 hover:bg-blue-300 hover:text-black");
    ubicacion.appendChild(btn);
    inputNewLIst.value = ''
    return console.log(`nueva lista ${name} agrergada`, btn);
}