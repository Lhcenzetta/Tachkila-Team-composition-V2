const cardj = document.querySelector("#joueursComposition");

import { Joueurs } from "./natif/js/stockage.js";
function CarteComposition(player) {
    const card = document.createElement("div");

    card.className = "flex flex-rows items-center gap-2 p-2 bg-slate-800 border-2 rounded-lg text-white min-w-0";

   
    if (player.position === "Gardien") {
        card.classList.add("border-yellow-500");
    }
    else if (player.position === "Défenseur") {
        card.classList.add("border-blue-500");
    }
    else if (player.position === "Milieu") {
        card.classList.add("border-green-500");
    }
    else {
        card.classList.add("border-red-500");
    }
    const numero = document.createElement("span");
    numero.className = "font-bold shrink-0";
    numero.textContent = player.numéro;
    const nom = document.createElement("span");
    nom.className = "text-xs font-semibold truncate";
    nom.textContent = player.nom;

    card.append(numero, nom);

    if (player.capitaine) {
        const capitaine = document.createElement("span");
        capitaine.className = "text-purple-400 font-bold";
        capitaine.textContent = "C";

        card.append(capitaine);
    }
    return card;
}
function afficherJoueurs() {
    cardj.textContent = "";

    Joueurs.forEach(joueur => {
        cardj.append(CarteComposition(joueur));
    });

    document.querySelector("#playerCount").textContent = "Joueur " + Joueurs.length;
}
afficherJoueurs()