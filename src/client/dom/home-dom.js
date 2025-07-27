export const popularesContain = document.getElementById("populares");

export function crearCart(){
    const article = document.createElement("div");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");

    img.src = datos.poster_path;
    h3.textContent = datos.original_title;
    article.appendChild(img);
    article.appendChild(h3);

    popularesContain.appendChild(article);
}

export const datos = {
  adult: false,
  backdrop_path: '/8J6UlIFcU7eZfq9iCLbgc8Auklg.jpg',
  genre_ids: [ 14, 10751, 28 ],
  id: 1087192,
  original_language: 'en',
  original_title: 'How to Train Your Dragon',
  overview: 'En la escarpada isla de Mema, donde vikingos y dragones han sido enemigos acérrimos durante generaciones, Hipo se desmarca desafiando siglos de tradición cuando entabla amistad con Desdentao, un temido dragón Furia Nocturna. Su insólito vínculo revela la verdadera naturaleza de los dragones y desafía los cimientos de la sociedad vikinga.',
  popularity: 775.857,
  poster_path: 'https://image.tmdb.org/t/p/w200/9Zr7ZyiMpgMhhxJQi1tQJp9LGho.jpg',
  release_date: '2025-06-06',
  title: 'Cómo entrenar a tu dragón',
  video: false,
  vote_average: 8.07,
  vote_count: 1244
}