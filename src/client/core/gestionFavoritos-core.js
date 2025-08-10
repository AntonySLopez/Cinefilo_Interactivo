    import { favoritos } from "../dom/gestionFavoritos-dom";
    import { dbMovieTemporal } from "../utils/dbTemporal";
    import { updateFavoritos } from "../services/updateFavoritos-fetch";

export async function actionFavoritos() {

// Obtenermos id y estado del btn
    const id = favoritos.dataset.id;
    let estado = (favoritos.dataset.favorito == 'true')? true : false;

    console.log(`db-id`,dbMovieTemporal[id] , `estado: `,estado);

    const { title, poster_path, backdrop_path } = dbMovieTemporal[id]
//radar de resultado
    console.log(estado);
// datos para usr en fetch
    const data = {
        "userId"    : 2,
        "movieID"   : id,
        "titulo"    : title,
        "poster"    : poster_path,
        "baner"     : backdrop_path
    };

    const result = await updateFavoritos(data, estado);

    //funcion que utiliza result para mostrar un modal con notifiacion
    if(result.message == 'Ya está activo' | result.message == 'Agregado con éxito' ){
        favoritos.style.backgroundColor = "red";
        console.log(result.message);
        favoritos.dataset.favorito = 'true'
        console.log(estado);
        console.log(favoritos);

    }else{
        favoritos.style.backgroundColor = "gray"
    }
}