import { afficherMatchs, AfficherMatchCartes } from "./AfficherMatchDom.js";
import { Match } from "./stockage.js";
import { SearchMatch} from "./search_match.js"
const sectionMatch = document.querySelector("#Carte-Match");
export const btns = document.querySelectorAll(".filter-btn")

export function filter_match() {
    let positions = []
    btns.forEach(btn => {
        btn.addEventListener("click", () => { 
            const value = btn.textContent.trim();
            if (value === "Tous") {
                positions = [];
            }
            else if (positions.includes(value)) {
                const index = positions.indexOf(value);
                positions.splice(index, 1);
            }
            else {
                positions.push(value);
            }

            if (positions.length === 0) {
                afficherMatchs()
            }
            else {
                sectionMatch.textContent = ""
                Match.forEach(match => {
                    if (value === "Jouer" && (match.butsAtlas !== null || match.butsAdversaire !== null))
                    {
                        sectionMatch.append(AfficherMatchCartes(match))
                    }
                    else if (value === "A revenir" && (match.butsAtlas === null || match.butsAdversaire === null) )
                        {
                        sectionMatch.append(AfficherMatchCartes(match))
                    }
                })
            }
        })
        SearchMatch("")
    })
}