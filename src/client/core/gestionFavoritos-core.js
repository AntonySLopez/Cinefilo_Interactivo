    import { favoritos } from "../dom/gestionFavoritos-dom";
    import { dbMovieTemporal } from "../utils/dbTemporal";
    import { updateFavoritos } from "../services/updateFavoritos-fetch";

export async function actionFavoritos(estado) {

    //id de usuario

    const id = favoritos.dataset.id;
    console.log(`db-id`,dbMovieTemporal[id]);

    const { title, poster_path, backdrop_path } = dbMovieTemporal[id]

    console.log(id);

    const data = {
        "userId"    : 1,
        "movieID"   : id,
        "titulo"    : title,
        "poster"    : poster_path,
        "baner"     : backdrop_path
    };

    console.log(`data`,data);
    

    const result = await updateFavoritos(data,estado);

    //funcion que utiliza result para mostrar un modal con notifiacion
    if(result){
        favoritos.style.backgroundColor = "red";
    }else{
        favoritos.style.backgroundColor = "gray"
    }
}