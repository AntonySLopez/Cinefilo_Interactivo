    export const modalInfo = document.getElementById("modal-info");

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