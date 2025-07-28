export async function importData(tipo, page) {
        const key = `4aa37c58ab89482e33bf09386ac78e17`;

    try {
        const peticion = await fetch(`https://api.themoviedb.org/3/movie/${tipo}?api_key=${key}&language=es-ES&page=${page}`);

        const result = await peticion.json();
        return result.results;

    } catch (error) {
        return {status: 500, message:error};
    }
}