    import { modalController } from "../utils/modalController";
    import { modalToggle } from "../utils/modalToggle";
    import { elementoDom } from "../dom/navController";

    export function navModal(e){

        const btnActivo = e.target.parentElement.dataset;
        console.log(btnActivo);
        if (modalController.modalActivo == btnActivo.href) {
            console.log(`error`);
            return;
        }else{
            modalToggle(modalController.modalActivo, elementoDom[btnActivo.href])
            modalController.modalActivo = elementoDom[btnActivo.href]
        };
    };