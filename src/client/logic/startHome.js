//funcino para ordenar peliculas por id:
export  function saveIdMovies(data, db) {
    
    for (const movie of data) {
        db[movie.id] = {
            "poster_path": movie.poster_path,       //poster
            "backdrop_path": movie.backdrop_path,   //baner
            "title": movie.title,                   //titulo
            "video": movie.video,                   //videio
            "vote_average:": movie.vote_average,    //estrellas
            "vote_count": movie.vote_count,         //cantidad de votos totales
            "overview": movie.overview              //descripcion
        }
    }
}