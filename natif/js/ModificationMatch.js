import { Match, refresh1 } from "./stockage.js";
import { modalmatch, save_btn } from "../../matchs.js";
import { AjouterMatch } from "./AjouteMatch.js";
import { afficherMessage, valide_input_match } from "./validation.js";
import { afficherMatchs } from "./AfficherMatchDom.js";

let sauvegardeModification = null;

export function ModificationMatch(btnEdit, match) {

    btnEdit.addEventListener("click", () => {

        const index = Match.findIndex(j => j.id === match.id);

        if (index === -1) return;

        modalmatch.classList.remove("hidden");
        const title = document.querySelector("#title");
        title.textContent = "Modifier le match";
        document.querySelector("#Adversaire").value = Match[index].adversaire;
        document.querySelector("#date").value = Match[index].date;
        document.querySelector("#Heure").value = Match[index].heure
        document.querySelector("#Lieu").value = Match[index].lieu
        const radios = document.querySelectorAll('input[name="lieu"]');
        radios.forEach(radio => {
            if (Match[index].domicile === true) {
                radio.checked = radio.value === "Domicile";
            } else {
                radio.checked = radio.value === "Extérieur";
            }
        });
        save_btn.removeEventListener("click", AjouterMatch);
        save_btn.onclick = () => {
            const nameComplet = document.querySelector("#Adversaire").value.trim();
            const date = document.querySelector("#date").value;
            const Heure = document.querySelector("#Heure").value;
            const Lieu = document.querySelector("#Lieu").value.trim();
            const lieu_match = document.querySelector('input[name="lieu"]:checked');
            const valid = valide_input_match(nameComplet, Heure, date, Lieu);
            if (!valid) return;
            if (lieu_match === null) {
                afficherMessage("Choisissez Domicile ou Extérieur !", false);
                return;
            }
            Match[index].adversaire = nameComplet;
            Match[index].date = date;
            Match[index].Heure = Heure;
            Match[index].Lieu = Lieu;
            Match[index].domicile = lieu_match.value === "Domicile";
            refresh1()
            afficherMatchs()
            modalmatch.classList.add("hidden");
        };
        console.log(Match)

    });
}
