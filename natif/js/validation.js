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


export function valide_input_name(name, number, age, selectedPost ,check_in) {
    let valid = true;
    let count = 0
    Joueurs.forEach(j => {
        if (j.position === "Gardien") count += 1
    });
    console.log(count)
    if (name === "") {
        afficherMessage("Le nom est obligatoire !", false);
        valid = false;
    }
    else if (!/^[a-zA-ZÀ-ÿ' -]{3,30}$/.test(name)) {
        afficherMessage("Le nom doit etre vrai nom!", false);
        valid = false;
    }
    else if (number === "" || Number(number) < 1 || Number(number) > 99) {
        afficherMessage("Le numéro doit être entre 1 et 99 !", false);
        valid = false;
    }
    else if (age === "" || Number(age) < 10 || Number(age) > 39) {
        afficherMessage("L'age de jouer doit etre entre 10 and 39", false);
        valid = false;
    }
    else if (Joueurs.some(j => Number(j.numéro) === Number(number)) && check_in) {
        afficherMessage("Ce numéro est deja utilise par un joueur !", false);
        valid = false;
    }
    else if (selectedPost === "Gardien" && count > 2)
    {
        afficherMessage("l'equipe accepte seulement 2 joueur gardiens", false)
        valid = false
    }
    return valid;
}

export function valide_input_match(nameComplet, Heure, date, Lieu) {
    let valid = true;

    if (nameComplet === "" || Lieu === "") {
        afficherMessage("Le nom d'equipe  est obligatoire ou le field de lieu n'est doit pad etre vide !", false);
        valid = false;
    }
    else if (!/^[a-zA-ZÀ-ÿ' -]{3,40}$/.test(nameComplet) && !/^[a-zA-ZÀ-ÿ' -]{3,30}$/.test(Lieu)) {
        afficherMessage("Le nom d'equipe et lieu doit etre vrai nom!", false);
        valid = false;
    }
    else if (date === "" || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        afficherMessage("La date doit être au format AAAA-MM-JJ !", false);
        valid = false;
    }
    else if (Heure === "" || !/^([01]\d|2[0-3]):[0-5]\d$/.test(Heure)) {
        afficherMessage("L'heure doit être au format HH:mm (00:00 à 23:59) !", false);
        valid = false;
    }
    return valid;
}