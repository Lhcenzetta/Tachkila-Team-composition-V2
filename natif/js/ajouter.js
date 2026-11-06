import { valide_input_name, afficherMessage } from "./validation.js";
import { Joueurs , refresh } from "./stockage.js";
import { afficherJoueurs } from "./interface.js";
import { pagination } from "./pagination.js";
const modaljoueur = document.querySelector("#modaljoueur")
const playerCount = document.querySelector("#playerCount")
const key = "my_data"
export function AjouterJoueur() {
    let name = document.querySelector("#nomplayer").value.trim();
    let number = document.querySelector("#numplayer").value.trim();
    let selectedPost = document.querySelector("#postplayer").value;
    let age = document.querySelector("#ageplayer").value;
    let statut = document.querySelector("#statusplayer").value;
    let count = 0
    Joueurs.forEach(j => {
        if (j.position === "Gardien") count += 1
    });
    console.log(count)
    const valid = valide_input_name(name, number, age, true);
    if (count > 2) {
        afficherMessage("Les gardiens ne doit pas passer 2 joueur", false);
        return;
    }
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
                capitan : false
            });
        afficherJoueurs();
        modaljoueur.classList.remove("openclose");
        afficherMessage("Joueur ajoute avec succes !", true);

    }
    else if (valid && !selectedPost) {
       afficherMessage("Veuillez selectionner une position !", false);
    }
    refresh()
    pagination()
    // playerCount.textContent = Joueurs.length + " joueur(s)"
  
}