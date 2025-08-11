import { inputNewLIst } from "../dom/crearListaNueva";
import { listBox } from "../dom/crearListaNueva";
import { addNewList } from "../dom/crearListaNueva";
import { dbUser } from "../utils/dbTemporal";
import { addlistSql } from "../services/crearListaNueva";

export async function addList() {
    const idUser = dbUser.idUser || 2
    const nameList = inputNewLIst.value.trim();
    if(nameList.length <= 4){
        return console.log(`Nombre de lista muy corta`);        
    };

    const res = await addlistSql(idUser, nameList);
console.log(res);

    if(res.code === 200){
        addNewList(listBox, nameList)
    }
    if(res.code === 500){
        return console.log(`Error ne servidor`);        
    }
}