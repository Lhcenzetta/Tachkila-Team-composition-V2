import { confirmationModal ,AnnulerConfirmation} from "../../script.js";
import { pagination } from "./pagination.js";
import { Joueurs } from "./stockage.js";
import { afficherMessage } from "./validation.js";
export function DeleteJoueur(btnDelete, cardj, player) {
    btnDelete.addEventListener("click", () => {
        const index = Joueurs.findIndex(j => j.id === player.id);
        confirmationModal.classList.remove('hidden')
        confirmedelete.addEventListener("click", () => {
            if (index !== -1) {
                Joueurs.splice(index, 1);
                // localStorage.setItem(key, JSON.stringify(Joueurs));
                // playerCount.textContent = Joueurs.length + " joueur(s)";
                cardj.remove();
                confirmationModal.classList.add('hidden')
                afficherMessage("le joueur a ete supprimer !!", false)
                pagination
            }
        })
        AnnulerConfirmation.addEventListener("click", () => {
            confirmationModal.classList.add('hidden')
        })

    });
}