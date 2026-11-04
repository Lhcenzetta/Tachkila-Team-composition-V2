import { Joueurs, Match, refresh1 } from "./stockage.js";
import { confirmationModal, AnnulerConfirmation, confirmedelete } from "../../matchs.js";
import { afficherMessage } from "./validation.js";
export function DeleteMatch(match, btnDelete, card)
{
    const index = Match.findIndex(j => j.id === match.id)
    btnDelete.addEventListener("click", () => {
        confirmationModal.classList.remove('hidden')
        confirmedelete.addEventListener("click", () => {
            if (index !== -1) {
                Match.splice(index, 1)
                confirmationModal.classList.add('hidden')
                refresh1()
                card.remove()
            }
        })
    })
    AnnulerConfirmation.addEventListener("click", () => {
        confirmationModal.classList.add('hidden')
    })
}