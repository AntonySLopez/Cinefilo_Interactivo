    import { navModal } from "../core/navController";
    import { nav } from "../dom/navController";

    export function navController(){
        nav.addEventListener('click', navModal)
    };