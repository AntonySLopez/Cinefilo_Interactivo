//funcino para ordenar peliculas por id:
export  function saveIdMovies(data, db) {
    for (const movie of data) {
        db[movie.id] = {
            "backdrop_path": movie.backdrop_path,
            "poster_path": movie.poster_path,
            "title": movie.title,
            "video": movie.video,
            "vote_average:": movie.vote_average,
            "vote_count": movie.vote_count,
            "overview": movie.overview
        }
    }
}