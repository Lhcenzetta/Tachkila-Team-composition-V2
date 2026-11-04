import { Joueurs, refresh } from "./stockage.js";
import { valide_input_name, afficherMessage } from "./validation.js";
import { save_btn, } from "../../effectif.js";
import { AjouterJoueur } from "./ajouter.js";
import { afficherJoueurs } from "./interface.js";
import { pagination } from "./pagination.js";
export function modifierJouer(btnEdit, player) {
    btnEdit.addEventListener("click", () => {
        const title = document.querySelector("#title");
        title.textContent = "Modifier le Joueur";

        modaljoueur.classList.add("openclose");

        const index = Joueurs.findIndex(j => j.id === player.id);

        let name = document.querySelector("#nomplayer");
        name.value = Joueurs[index].nom;

        let number = document.querySelector("#numplayer");
        number.value = Joueurs[index].numéro;

        let selectedPost = document.querySelector("#postplayer");
        selectedPost.value = Joueurs[index].position

        let age = document.querySelector("#ageplayer")
        age.value = Joueurs[index].age

        let statut = document.querySelector("#statusplayer");
        statut.value = Joueurs[index].statut

        save_btn.removeEventListener("click", AjouterJoueur);

        // console.log(age.value, statut.value, selectedPost.value, number.value, name.value)
        save_btn.onclick = () => {
            let newName = name.value.trim();
            let newNumber = number.value;
            let newPost = document.querySelector("#postplayer").value;
            let newAge = document.querySelector("#ageplayer").value;
            let newStatut = document.querySelector("#statusplayer").value;
            const valid = valide_input_name(newName, newNumber, newAge, false);
            if (valid && newPost) {
                Joueurs[index].nom = newName;
                Joueurs[index].numéro = newNumber;
                Joueurs[index].position = newPost;
                Joueurs[index].age = newAge;
                Joueurs[index].statut = newStatut
                // localStorage.setItem(key, JSON.stringify(Joueurs));
                afficherJoueurs()
                afficherMessage("success modified", true)
                modaljoueur.classList.remove("openclose");
            }
            else if (valid && !selectedPost) {
                afficherMessage("Veuillez selectionner une position !", false);
            }
            refresh()
            pagination()
        };
    });
}