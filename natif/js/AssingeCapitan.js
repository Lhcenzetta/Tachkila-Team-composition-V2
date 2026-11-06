import { AfficheJoueur, afficherJoueurs } from "./interface.js"
import { pagination } from "./pagination.js"
import { Joueurs ,refresh} from "./stockage.js"

export function AssingeCapitan(btnCaptain, player) {
    btnCaptain.addEventListener("click", () => {
        const index = Joueurs.findIndex(j => j.id == player.id)
        Joueurs.forEach(j => {
            if (j.id === Joueurs[index].id) {
                Joueurs[index].capitan= true
                console.log(j)
            }
            else
                j.capitan = false
        })
        afficherJoueurs()
        refresh()
        pagination()
    })
}