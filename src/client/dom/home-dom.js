import mod from "astro/zod";
import MovieInfo from "../../components/MovieInfo.astro";

//elemtos de home boxs
  export const box1 = document.getElementById("box1");
  export const box2 = document.getElementById("box2");
  export const box3 = document.getElementById("box3");
  export const box4 = document.getElementById("box4");
  export const box5 = document.getElementById("box5");
  
//elemento padre home.astro
  export const home = document.getElementById("home")

//elemento padre movieInfo.astro
  export const modalInfo = document.getElementById("modal-info")

//elemento padre navMenu.astro
 export const nav = document.getElementById("nav-menu")
//elemento padre de buscador
 export const buscador = document.getElementById("buscador")

// constrol de elemtos
  console.log(nav);


//funcion generadora de cartas para todo video
export function cardGenerador(data){
    const url = `https://image.tmdb.org/t/p/w500`;
    const { poster_path } = data;

    const src = url + poster_path;

    let article = document.createElement("article");
    article.className = ("flex-shrink-0")

    let img = document.createElement("img");
    img.className = ("w-auto h-[100%]")
    img.src = src;
    img.dataset.id = data.id

    article.appendChild(img)

    return article;
  }

  export function cardRender(contenedor, datos) {
    datos.results.forEach( dato => {
        const card = cardGenerador(dato);
        contenedor.appendChild(card)
    });

  }

//funcion para mostrar btn de genero

  export function btnGenerador(data){
    const { id, name } = data;

    let btn = document.createElement("button");
    btn.textContent = name;
    btn.setAttribute("idGenero", id)
    btn.className = ("text-black bg-white p-2 rounded-xl w-auto flex items-center whitespace-nowrap")
    return btn
  }

//funcion para mostrar y ocultar modales

  export function modalToggle(modalActivo, modalOcultar){

    modalOcultar.classList.toggle("hidden");
    modalActivo.classList.toggle("hidden");
  }

// contendor de elementos
export const elementoDom = {
  "home": home,
  "buscador": buscador
}

//funcion para mostrar contenido en movieInfo

export function loadInfo(id, db) {
  

  const url = `https://image.tmdb.org/t/p/w780`

  const poster = modalInfo.querySelector("#poster");
  const titulo = modalInfo.querySelector("#title");
  const contexto = modalInfo.querySelector("#contexto");
  const infoStars = modalInfo.querySelector("#info-stars");
  const favoritos = modalInfo.querySelector("#action-favorito");
  const lista = modalInfo.querySelector("#action-list");
  const reparto = modalInfo.querySelector("#reparto");

  const data = db[id];
  console.log(data);

  const { backdrop_path, title, vote_average, overview } = data;

  titulo.textContent = title;
  contexto.textContent = overview;
  infoStars.textContent = vote_average;
  poster.src = url + backdrop_path;

}