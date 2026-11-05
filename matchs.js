export const save_btn = document.querySelector("#save-btn")
export const modalmatch = document.querySelector("#modalmatch")
export const confirmationModal = document.querySelector("#modal-confirmation")
export const confirmedelete = document.querySelector("#confirmedelete")
export const AnnulerConfirmation = document.querySelector("#Annuler-confirmation")
const BtnAjouter = document.querySelector("#Btn-Ajouter")
import { AjouterMatch } from "./natif/js/AjouteMatch.js"
import { Match } from "./natif/js/stockage.js"
import {afficherMatchs} from "./natif/js/AfficherMatchDom.js"
import { SearchMatch } from "./natif/js/search_match.js"
import { filter_match } from "./natif/js/filter_match.js"
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

AnnulerConfirmation.addEventListener("click", () => {
    confirmationModal.classList.add('hidden')
})
afficherMatchs()
SearchMatch("")
filter_match()