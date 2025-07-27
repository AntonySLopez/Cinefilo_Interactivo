/*
endpoints para pedir lista de peliculas.

    populares, mas valoradas, proximos estrenos

endpoints que obtienen informacion por id de pelicula, todas en cadena

    detalles de pelicula, creditos de pelicula, triler y videos, peliculas similares

endpoints de busqueda

    por nombre, actor o director, 

    cadena nombre/ detalles,  y  cadena director/detalles

    cadena de nombre y director  / peliculas en las que partisipo

generos

    lista de generos

imagenes

    Las imágenes (posters, portadas) no se obtienen directamente. Tienes que construirlas así:

    🔸 URL base de imágenes:
    txt
    Copiar
    Editar
    https://image.tmdb.org/t/p/
    🔸 Tamaños más usados:
    /w200 → miniatura

    /w500 → imagen media

    /original → tamaño original

    🔸 Ejemplo:
    js
    Copiar
    Editar
    let poster = "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg";
    let urlPoster = `https://image.tmdb.org/t/p/w500/7HqLLVjdjhXS0Qoz1SgZofhkIpE.jpg`;


    
*/

/* fetch universal

 url base    https://api.themoviedb.org/3/

 peliculas
    
    peliculas populares 

     /movie/popular
    https://api.themoviedb.org/3/movie/popular?api_key=TU_API_KEY&language=es-ES&page=1

    peliculas mas valoradas

    /movie/top_rated
    https://api.themoviedb.org/3/movie/top_rated?api_key=TU_API_KEY&language=es-ES&page=1

    estrenos en cines

    /movie/now_playing
    https://api.themoviedb.org/3/movie/now_playing?api_key=TU_API_KEY&language=es-ES&page=1

    proximos estrenos

    /movie/upcoming
    https://api.themoviedb.org/3/movie/upcoming?api_key=TU_API_KEY&language=es-ES&page=1

    detalles de pelicula

    /movie/{movie_id}
    https://api.themoviedb.org/3/movie/550?api_key=TU_API_KEY&language=es-ES

    Créditos (actores, director, etc.)

    /movie/{movie_id}/credits
    https://api.themoviedb.org/3/movie/550/credits?api_key=TU_API_KEY&language=es-ES

    trailers y videos

    /movie/{movie_id}/videos
    https://api.themoviedb.org/3/movie/550/videos?api_key=TU_API_KEY&language=es-ES

    peliculas similares

    /movie/{movie_id}/similar
    https://api.themoviedb.org/3/movie/550/similar?api_key=TU_API_KEY&language=es-ES&page=1

busqueda

    buscar pelicula por nombre

    /search/movie
    https://api.themoviedb.org/3/search/movie?api_key=TU_API_KEY&language=es-ES&query=batman&page=1

    buscar por persona (actor/director)

    /search/person
    https://api.themoviedb.org/3/search/person?api_key=TU_API_KEY&language=es-ES&query=brad+pitt

personas (actores?directores)

    detalles de una persona

    /person/{person_id}
    https://api.themoviedb.org/3/person/287?api_key=TU_API_KEY&language=es-ES

    peliculas a las que participo

    /person/{person_id}/movie_credits
    https://api.themoviedb.org/3/person/287/movie_credits?api_key=TU_API_KEY&language=es-ES

generos

    lista de generos

    /genre/movie/list
    https://api.themoviedb.org/3/genre/movie/list?api_key=TU_API_KEY&language=es-ES

*/

const dbTemporal = [];

function url(peticion) {

//url contador
    let page = 1

    const API_KEY = import.meta.env.KEY_API_TMDB;
    const url = {
        "popular":`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`
    };

    return url[peticion];
};

async function mtdbApi(peticion) {
      
    try {

        const res = await fetch(url(peticion));
        const resultado = await res.json();

        if(resultado <= 0){
            return {message: `Sin datos`}
        };

        return resultado
    } catch (error) {
        return {message: error.message};
    }
}

async function load() {
        const res = await mtdbApi("popular")
        dbTemporal.push(res)

    setTimeout(() => {
        console.log(dbTemporal[0].results[0]);
        
    }, 2000);
}
load()