import { Joueurs } from "./stockage.js"
export function statistique() {
    let totalage = 0
    const total_effectif = document.getElementById("total-effectif")
    const enforme = document.getElementById("En-form")
    const blesse = document.getElementById("blesse")
    const ageaveg = document.getElementById("ageaveg")
    Joueurs.forEach(j => {
        if (j.statut === "En forme") enforme.textContent++
    });
    Joueurs.forEach(j => {
        if (j.statut === "Blessé") blesse.textContent++
    });
    Joueurs.forEach(j => {
        totalage += Number(j.age)

    })
    total_effectif.textContent = Joueurs.length
    ageaveg.textContent = (totalage / Joueurs.length).toFixed(2) + " ans";

}