

export async function importData(tipo, page) {
    const key = `4aa37c58ab89482e33bf09386ac78e17`;
    const urlApi = {
            "genre": `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=es-ES`,
            "movie": `https://api.themoviedb.org/3/movie/${tipo}?api_key=${key}&language=es-ES&page=${page}`
        }

    try {

        const url = urlApi[tipo] || urlApi.movie
        const peticion = await fetch(url);
        const result = await peticion.json();     

        return result;

    } catch (error) {
        return {status: 500, message:error};
    }
}

export async function importBusqueda(string, page) {
        const key = `4aa37c58ab89482e33bf09386ac78e17`;
        const urlApi = `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=es-ES&query=${string}&page=${page}`;

    try {
        const peticion = await fetch(urlApi);
        const result = await peticion.json();

        return result;
    } catch (error) {
        return {status: 500, message:error}
    };
}