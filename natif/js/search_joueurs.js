import { AfficheJoueur, JoueursDispo } from "./interface.js";
import { Joueurs } from "./stockage.js";
import { pagination } from "./pagination.js";
import { filter } from "./filtrage.js"
export function searchPlayer(e) { 
    const value = e.target.value;
    searcheinarray(value)
} 
function searcheinarray(value) {
    JoueursDispo.textContent = ""
    console.log(value)
    Joueurs.forEach((joueur) => {
        if (joueur.nom.includes(value)) {
            JoueursDispo.append(AfficheJoueur(joueur))
            filter()
            pagination()
        }
    })
}