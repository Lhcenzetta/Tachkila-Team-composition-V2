export const save_btn = document.querySelector("#save-btn")
export const modalmatch = document.querySelector("#modalmatch")
const BtnAjouter = document.querySelector("#Btn-Ajouter")
import { AjouterMatch } from "./natif/js/AjouteMatch.js"
import { Match } from "./natif/js/stockage.js"
import { AfficherMatchCartes} from "./AfficherMatchDom.js"
const annulerbtn = document.querySelector("#Annuler-btn")
const btnColose = document.querySelector("#btnClose");


BtnAjouter.addEventListener("click", () => {
    modalmatch.classList.remove("hidden")
}) 

annulerbtn.addEventListener("click", () => {
    modalmatch.classList.add("hidden")
})
btnColose.addEventListener("click", () => {
    modalmatch.classList.add("hidden")
})
save_btn.addEventListener("click", AjouterMatch)

AfficherMatchCartes()

