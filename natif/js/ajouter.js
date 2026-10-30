import { valide_input_name, afficherMessage } from "./validation.js";
import { Joueurs , refresh } from "./stockage.js";
import { afficherJoueurs } from "./interface.js";
const modaljoueur = document.querySelector("#modaljoueur")
const playerCount = document.querySelector("#playerCount")

export function AjouterJoueur() {
    let name = document.querySelector("#nomplayer").value.trim();
    let number = document.querySelector("#numplayer").value.trim();
    let selectedPost = document.querySelector('input[name="post"]:checked')?.value;

    const valid = valide_input_name(name, number, true);

    if (valid && selectedPost) {
        Joueurs.push(
            {
                id: Joueurs.length + 1,
                nom: name,
                numéro: Number(number),
                poste: "Sur le banc",
                position: selectedPost
            });
        afficherJoueurs();
        modaljoueur.classList.remove("openclose");
        afficherMessage("Joueur ajoute avec succes !", true);

    }
    else if (valid && !selectedPost) {
        afficherMessage("Veuillez selectionner une position !", false);
    }
    refresh()
    playerCount.textContent = Joueurs.length + " joueur(s)"
}

// save_btn.addEventListener("click", AjouterJoueur)