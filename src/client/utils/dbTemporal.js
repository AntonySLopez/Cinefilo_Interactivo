//creamos dbTemporal contenedor de populares en prueva
export let dbMovieTemporal = [];

export let dbUser = []

/*

0: 
adult: false
backdrop_path: "/8J6UlIFcU7eZfq9iCLbgc8Auklg.jpg"
genre_ids: (3) [14, 10751, 28]
id: 1087192
original_language: "en"
original_title: "How to Train Your Dragon"
overview: "En la escarpada isla de Mema, donde vikingos y dragones han sido enemigos acérrimos durante generaciones, Hipo se desmarca desafiando siglos de tradición cuando entabla amistad con Desdentao, un temido dragón Furia Nocturna. Su insólito vínculo revela la verdadera naturaleza de los dragones y desafía los cimientos de la sociedad vikinga."
popularity: 663.8759
poster_path: "/9Zr7ZyiMpgMhhxJQi1tQJp9LGho.jpg"
release_date: "2025-06-06"
title: "Cómo entrenar a tu dragón"
video: false
vote_average: 8.079
vote_count: 1361

            "poster_path": movie.poster_path,       //poster
            "backdrop_path": movie.backdrop_path,   //baner
            "title": movie.title,                   //titulo
            "video": movie.video,                   //videio
            "vote_average:": movie.vote_average,    //estrellas
            "vote_count": movie.vote_count,         //cantidad de votos totales
            "overview": movie.overview              //descripcion

*/