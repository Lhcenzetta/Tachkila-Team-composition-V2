import { Match, refresh1 } from "./stockage.js";
import { afficherMessage, valide_input_match } from "./validation.js";
import { modalmatch } from "../../matchs.js";
export function AjouterMatch() {
    let nameComplet = document.querySelector("#Adversaire").value.trim();
    let date = document.querySelector("#date").value.trim();
    let Heure = document.querySelector("#Heure").value;
    let Lieu = document.querySelector("#Lieu").value;
    const lieu_match = document.querySelector('input[name="lieu"]:checked');
    const valid = valide_input_match(nameComplet, Heure, date, Lieu)
    if (valid) {
        
        Match.push(
            {
                id: Match.length + 1,
                adversaire: nameComplet,
                date: date,
                heure: Heure,
                lieu: Lieu,
                domicile: lieu_match.value === "Domicile" ? true : false,
                butsAtlas: null,
                butsAdversaire: null,
                composition: []
              });
          modalmatch.classList.add("hidden");
          afficherMessage("Match a ajoute avec succes !", true);
  
    }
      else if (valid) {
         afficherMessage("Veuillez verifier vous donnez!", false);
      }
    refresh1()
}