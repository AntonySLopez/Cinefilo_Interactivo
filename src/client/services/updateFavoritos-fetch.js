export async function updateFavoritos(data, action) {
    try {
        const urlAdd = "api/favoritos/add";
        const urlDelete = "api/favoritos/delete";

        const url = !action? urlAdd : urlDelete;
        const method = !action? "POST" : "DELETE"

        const res = await fetch(url, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        // Convertir respuesta a JSON
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
