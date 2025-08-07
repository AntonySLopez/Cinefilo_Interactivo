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