import { AjouterJoueur } from "./natif/js/ajouter.js";
import { pagination } from "./natif/js/pagination.js";
import { searchPlayer } from "./natif/js/search_joueurs.js";
import { filter } from "./natif/js/filtrage.js";
import { statistique } from  "./natif/js/statistique_Joueur.js";
const btn = document.querySelector("#Btn-Ajouter");
const btnColose = document.querySelector("#btnClose");
const annulerbtn = document.querySelector("#Annuler-btn")
export const save_btn = document.querySelector("#save-btn")
export const btns = document.querySelectorAll(".filter-btn")
export const searchplayer = document.querySelector("#searchPlayer")
export const pagenumbers = document.getElementById("pageNumbers");
export const confirmationModal = document.querySelector("#modal-confirmation")
export const confirmedelete = document.querySelector("#confirmedelete")
export const AnnulerConfirmation = document.querySelector("#Annuler-confirmation")
pagination()

btn.addEventListener("click", () => {
    const title = document.querySelector("#title")
    title.textContent = "Ajouter le Joueur"
    modaljoueur.classList.toggle("openclose");
})

save_btn.addEventListener("click", AjouterJoueur)

btnColose.addEventListener("click", () => {
    modaljoueur.classList.toggle("openclose");
})

annulerbtn.addEventListener("click", () => {
    modaljoueur.classList.remove("openclose")
})
searchplayer.addEventListener("input", searchPlayer)
AnnulerConfirmation.addEventListener("click", () => {
    confirmationModal.classList.add("hidden")
})
filter()
statistique()