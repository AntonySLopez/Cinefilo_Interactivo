/**
 
export const popularesContain = document.getElementById("populares");

export function crearCart(){
    const article = document.createElement("div");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");

    img.src = datos.poster_path;
    img.width = 300
   // h3.textContent = datos.original_title;
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
  poster_path: 'https://image.tmdb.org/t/p/w500/9Zr7ZyiMpgMhhxJQi1tQJp9LGho.jpg',
  release_date: '2025-06-06',
  title: 'Cómo entrenar a tu dragón',
  video: false,
  vote_average: 8.07,
  vote_count: 1244
}

 */

export const box1 = document.getElementById("box1");
export const box2 = document.getElementById("box2");
export const box3 = document.getElementById("box3");
export const box4 = document.getElementById("box4");
export const box5 = document.getElementById("box5");

export const home = document.getElementById("home")
//funcion generadora de cartas para todo video
export function cardGenerador(data){
  const url = `https://image.tmdb.org/t/p/w500`;
  const { poster_path } = data;

  const src = url + poster_path;

  let article = document.createElement("article");
  article.className = (" inline-block flex-shrink-0 ")

  let img = document.createElement("img");
  img.className = ("w-auto h-[100%]")
  img.src = src;

  article.appendChild(img)

  return article;
}

//funcion para mostrar btn de genero

export function btnGenerador(data){
  const { id, name } = data;

  let btn = document.createElement("button");
  btn.textContent = name;
  btn.setAttribute("idGenero", id)
  btn.className = ("box2")
  return btn
}

