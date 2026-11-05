import { AfficherMatchCartes } from "./AfficherMatchDom.js";
// import { filter_match } from "./filter_match.js"; 
import { Match } from "./stockage.js";
const Searchmatch = document.querySelector("#searchPlayer");
const cartes = document.querySelector("#Carte-Match");

Searchmatch.addEventListener("input", (e) => {
    SearchMatch(e.target.value);
});
export function SearchMatch(value) {
    cartes.textContent = "";

    Match.forEach(match => {
        if (match.adversaire.toLowerCase().includes(value.toLowerCase())) {
            cartes.append(AfficherMatchCartes(match));
        }
    });
}