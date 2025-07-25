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