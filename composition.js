
import { Joueurs, refresh } from "/natif/js/stockage.js";
import { AssingeJeur, AffichierAssingPlayer } from "/natif/js/AssingeJoueur.js";

const cardj = document.querySelector("#joueursComposition");


const postes = {
    Gardien: [
        "GB - Gardien"
    ],
    Défenseur: [
        "DG - Arrière gauche",
        "DC - Défenseur central gauche",
        "DC - Défenseur central droit",
        "DD - Arrière droit"
    ],
    Milieu: [
        "MG - Milieu gauche",
        "MC - Milieu central gauche",
        "MC - Milieu central droit",
        "MD - Milieu droit"
    ],
    Attaquant: [
        "BU - Buteur 1",
        "BU - Buteur 2"
    ]
};

function CarteComposition(player) {
    const card = document.createElement("div");
    card.classList.add("comp-card");

    if (player.position === "Gardien") {
        card.classList.add("gb");
    }
    else if (player.position === "Défenseur") {
        card.classList.add("df");
    }
    else if (player.position === "Milieu") {
        card.classList.add("me");
    }
    else {
        card.classList.add("at");
    }

    const top = document.createElement("div");
    top.classList.add("comp-top");

    const numero = document.createElement("span");
    numero.classList.add("comp-number");
    numero.textContent = player.numéro;

    const nom = document.createElement("span");
    nom.classList.add("comp-name");
    nom.textContent = player.nom;

    top.append(numero, nom);


    const select = document.createElement("select");
    select.classList.add("comp-select");
    select.dataset.playerId = player.id;

    if (player.statut === "Blessé")
    {
        card.classList.add("blesse");

        const option = document.createElement("option");
        option.textContent = "Indisponible - Blessé";
        option.value = "Indisponible";

        select.append(option);
        select.disabled = true;
    }
    else
    {
        const banc = document.createElement("option");
        banc.textContent = "Sur le banc";
        banc.value = "Sur le banc";
        select.append(banc);

    
        postes[player.position].forEach(poste => {
            const option = document.createElement("option");
            option.textContent = poste;
            option.value = poste;

            select.append(option);
        });
        select.value = player.poste;
        select.value = player.poste || "Sur le banc";
        select.addEventListener("change", () => {
            AssingeJeur(player, select)
            DisablePoste();
        }) 
        refresh();
    }

    card.append(top, select);

    return card;
}

function afficherJoueurs() {
    cardj.textContent = "";

    Joueurs.forEach(joueur => {
        cardj.append(CarteComposition(joueur));
    });

    document.querySelector("#playerCount").textContent =
        Joueurs.length;
}

function DisablePoste() {
    const selects = document.querySelectorAll(".comp-select");

    selects.forEach(select => {
        const playerId = select.dataset.playerId;

        select.querySelectorAll("option").forEach(option => {
            option.disabled = Joueurs.some(j =>
                j.id != playerId &&
                j.poste === option.value &&
                option.value !== "Sur le banc"
            );
        });
    });
}

afficherJoueurs();
DisablePoste();
AffichierAssingPlayer() 