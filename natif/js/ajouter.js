import { valide_input_name, afficherMessage } from "./validation.js";
import { Joueurs , refresh } from "./stockage.js";
import { afficherJoueurs } from "./interface.js";
import { pagination } from "./pagination.js";
const modaljoueur = document.querySelector("#modaljoueur")
const playerCount = document.querySelector("#playerCount")

export function AjouterJoueur() {
    let name = document.querySelector("#nomplayer").value.trim();
    let number = document.querySelector("#numplayer").value.trim();
    let selectedPost = document.querySelector("#postplayer").value;
    let age = document.querySelector("#ageplayer").value;
    let statut = document.querySelector("#statusplayer").value;


    const valid = valide_input_name(name, number, age , true);

    if (valid && selectedPost) {
        Joueurs.push(
            {
                id: Joueurs.length + 1,
                nom: name,
                age: age,
                numéro: Number(number),
                statut:statut,
                position: selectedPost,
                poste: "Sur le banc",
                capitan : true
            });
        afficherJoueurs();
        modaljoueur.classList.remove("openclose");
        afficherMessage("Joueur ajoute avec succes !", true);

    }
    else if (valid && !selectedPost) {
       afficherMessage("Veuillez selectionner une position !", false);
    }
    pagination()
    refresh()
    // playerCount.textContent = Joueurs.length + " joueur(s)"
    console.log(Joueurs)
}