export async function addlistSql(idUser,nameList) {
    try {
        const data = {
            idUser: idUser,
            nameList: nameList
        }
        const url = "api/listas/add";

        const res = await fetch(url,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const result = await res.json();
        console.log(result);

        return result;

    } catch (error) {
        return {
            status: 500,
            message: error.message
        };
    }
}