import { Joueurs } from "./stockage.js";
export function afficherMessage(texte, success) {
    const notification = document.querySelector("#notification");
    const message = document.querySelector("#message");

    message.textContent = texte;

    if (success) {
        notification.classList.remove("bg-red-100", "border-red-500");
        notification.classList.add("bg-green-100", "border-green-500");

        message.classList.remove("text-red-700");
        message.classList.add("text-green-700");
    }
    else {
        notification.classList.remove("bg-green-100", "border-green-500");
        notification.classList.add("bg-red-100", "border-red-500");

        message.classList.remove("text-green-700");
        message.classList.add("text-red-700");
    }
    notification.classList.remove("hidden");
    setTimeout(() => {
        notification.classList.add("hidden");
    }, 2000);
}


export function valide_input_name(name, number, check_in) {
    let valid = true;

    if (name === "") {
        afficherMessage("Le nom est obligatoire !", false);
        valid = false;
    }
    else if (!/^[a-zA-ZÀ-ÿ' -]{2,30}$/.test(name)) {
        afficherMessage("Le nom doit etre vrai nom!", false);
        valid = false;
    }
    else if (number === "" || Number(number) < 1 || Number(number) > 99) {
        afficherMessage("Le numéro doit être entre 1 et 99 !", false);
        valid = false;
    }
    else if (Joueurs.some(j => Number(j.numéro) === Number(number)) && check_in) {
        afficherMessage("Ce numéro est deja utilise par un joueur !", false);
        valid = false;
    }

    return valid;
}