import { AfficheJoueur, JoueursDispo } from "./interface.js";
import { Joueurs } from "./stockage.js";
import { pagination } from "./pagination.js";
export function searchPlayer(e) { 
    const value = e.target.value;
    searcheinarray(value)
} 
function searcheinarray(value) {
    JoueursDispo.textContent = ""
    console.log(value)
    Joueurs.forEach((joueur) => {
        if (joueur.nom.startsWith(value)) {
            JoueursDispo.append(AfficheJoueur(joueur))
            pagination()
            
        }
    })
}