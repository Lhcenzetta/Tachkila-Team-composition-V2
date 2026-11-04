import { Joueurs, refresh } from "./stockage.js";
import { afficherMessage } from "./validation.js"
const GB = document.querySelector(".name")
const dg = document.querySelector(".p-dg")
const dc1 = document.querySelector(".p-dc1")
const dc2 = document.querySelector(".p-dc2")
const dd = document.querySelector(".p-dd")
const mg = document.querySelector(".p-mg")
const mc1 = document.querySelector(".p-mc1")
const mc2 = document.querySelector(".p-mc2")
const md = document.querySelector(".p-md")
const bu1 = document.querySelector(".p-bu1")
const bu2 = document.querySelector(".p-bu2")


export function AssingeJeur(player, playerselect)
{
    const index = Joueurs.findIndex(j => j.id == player.id)
        const nvpost = playerselect.value;
        const ancpost = Joueurs[index].poste;

    const occupe = Joueurs.some(j =>
        j.id !== player.id && j.poste === nvpost
    );
    if (occupe && nvpost !== "Sur le banc")
    {
        afficherMessage("Ce poste est deja occupe !" , false);
        playerselect.value = ancpost;
        return;
    }
    let valide = false;
        if (nvpost === "Sur le banc") {
            valide = true;
        }
        else if (player.position === "Gardien" && nvpost.startsWith("GB")) {
            valide = true;
        }
        else if (player.position === "Défenseur" &&
            (nvpost.startsWith("DG") || nvpost.startsWith("DC") || nvpost.startsWith("DD"))) {
            valide = true;
        }
        else if (player.position === "Milieu" &&
            (nvpost.startsWith("MG") || nvpost.startsWith("MC") || nvpost.startsWith("MD"))) {
            valide = true;
        }
        else if (player.position === "Attaquant" && nvpost.startsWith("BU")) {
            valide = true;
        }

        if (valide === false) {
            afficherMessage("Ce poste ne correspond pas a la position du joueur !" ,false);
            playerselect.value = ancpost;
            return;
        }
        else {
            afficherMessage("le joueure a ete assigner avec success", true);
            Joueurs[index].poste = nvpost;
            refresh()
        }
    console.log(Joueurs)
    AffichierAssingPlayer();
}

export function AffichierAssingPlayer() {
    GB.textContent = "Libre";
    dg.textContent = "Libre";
    dc1.textContent = "Libre";
    dc2.textContent = "Libre";
    dd.textContent = "Libre";
    mg.textContent = "Libre";
    mc1.textContent = "Libre";
    mc2.textContent = "Libre";
    md.textContent = "Libre";
    bu1.textContent = "Libre";
    bu2.textContent = "Libre";
    for (let i = 0; i < Joueurs.length; i++) {

        if (Joueurs[i].position === "Gardien") {
            if (Joueurs[i].poste === "GB - Gardien") {
                GB.textContent = Joueurs[i].nom;
                console.log(GB.textContent)
            }
        }
        else if (Joueurs[i].position === "Défenseur") {

            if (Joueurs[i].poste === "DG - Arrière gauche")
                dg.textContent = Joueurs[i].nom;

            else if (Joueurs[i].poste === "DC - Défenseur central gauche")
                dc1.textContent = Joueurs[i].nom;

            else if (Joueurs[i].poste === "DC - Défenseur central 2")
                dc2.textContent = Joueurs[i].nom;

            else if (Joueurs[i].poste === "DD - Défenseur droit")
                dd.textContent = Joueurs[i].nom;
        }
        else if (Joueurs[i].position === "Milieu") {

            if (Joueurs[i].poste === "MG - Milieu gauche")
                mg.textContent = Joueurs[i].nom;

            else if (Joueurs[i].poste === "MC - Milieu central gauche")
                mc1.textContent = Joueurs[i].nom;

            else if (Joueurs[i].poste === "MC - Milieu central droit")
                mc2.textContent = Joueurs[i].nom;

            else if (Joueurs[i].poste === "MD - Milieu droit")
                md.textContent = Joueurs[i].nom;
        }

        else if (Joueurs[i].position === "Attaquant") {

            if (Joueurs[i].poste === "BU - Buteur 1")
                bu1.textContent = Joueurs[i].nom;

            else if (Joueurs[i].poste === "BU - Buteur 2")
                bu2.textContent = Joueurs[i].nom;
        }
    }
}

console.log(Joueurs)