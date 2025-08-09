export async function updateFavoritos(data, action) {
    try {
        const urlAdd = "api/favoritos/add";
        const urlDelete = "api/favoritos/delete";

        const url = action? urlAdd : urlDelete;

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        // Convertir respuesta a JSON
        const result = await res.json();

        return result;
    } catch (error) {
        return {
            status: 500,
            message: error.message
        };
    }
}
