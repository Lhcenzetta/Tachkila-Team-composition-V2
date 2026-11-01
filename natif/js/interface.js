const JoueursDispo = document.querySelector("#joueur")
import { Joueurs, posts } from "./stockage.js";


function AfficheJoueur(player) {
    const cardj = document.createElement("div");
    if (player.position === "Gardien")
        cardj.classList.add("CardJoueur-Gb");
    else if (player.position === "Défenseur")
        cardj.classList.add("CardJoueur-DF");
    else if (player.position === "Milieu")
        cardj.classList.add("CardJoueur-ME");
    else
        cardj.classList.add("CardJoueur-AT");
    cardj.dataset.id = player.id;

    const playertop = document.createElement("div");
    playertop.classList.add("player-top");

    const playernum = document.createElement("div");
    playernum.classList.add("player-num");
    playernum.textContent = player.numéro;

    const playerinfo = document.createElement("div");
    playerinfo.classList.add("player-info");

    const span1 = document.createElement("span");
    span1.classList.add("player-name");
    span1.textContent = player.nom;

    const span2 = document.createElement("span");
    if (player.position === "Gardien")
        span2.classList.add("player-post-GB");
    else if (player.position === "Défenseur")
        span2.classList.add("player-post-DF");
    else if (player.position === "Milieu")
        span2.classList.add("player-post-ME");
    else
        span2.classList.add("player-post-AT");
    span2.textContent = player.position;

    playerinfo.append(span1, span2);

    const btnEdit = document.createElement("button");
    btnEdit.classList.add("icon-btn", "edit");
    const imgEdit = document.createElement("img");
    imgEdit.src = "icons/pen-to-square-regular.svg";
    imgEdit.alt = "Modifier";
    btnEdit.append(imgEdit);

    const btnDelete = document.createElement("button");
    btnDelete.classList.add("icon-btn", "delete");
    const imgDelete = document.createElement("img");
    imgDelete.src = "icons/trash-can.png";
    imgDelete.alt = "Supprimer";
    btnDelete.append(imgDelete);

    playertop.append(playernum, playerinfo);

    const age = document.createElement("p");
    age.classList.add("player-age");
    age.textContent = `Âge : ${player.age} ans`;
    const bottom = document.createElement("div");
    bottom.classList.add("player-bottom");

    const statut = document.createElement("span");
    statut.classList.add("player-status");
    statut.textContent = player.statut;
    if (player.statut === "Blessé") {
        statut.classList.add("blesse");
    }

    const btnCaptain = document.createElement("button");
    btnCaptain.type = "button";
    btnCaptain.classList.add("captain-btn");
    btnCaptain.textContent = "C";
    if (player.capitaine) {
        btnCaptain.classList.add("active");
        const badge = document.createElement("span");
        badge.classList.add("captain-badge");
        badge.textContent = "C";
        cardj.append(badge);
    }
    const actions = document.createElement("div");
    actions.classList.add("player-actions");
    actions.append(btnCaptain, btnEdit, btnDelete);

    bottom.append(statut, actions);

    cardj.append(playertop, age, bottom);

    // DeleteJoueur(btnDelete, cardj, player);
    // modifierJouer(btnEdit, player);

    return cardj;
}
export function afficherJoueurs() {
    JoueursDispo.textContent = ""
    Joueurs.forEach(joueur => {
        JoueursDispo.append(AfficheJoueur(joueur));
    });
}
afficherJoueurs()


// btnCaptain.addEventListener("click", () => {

//     const nouveauCapitaine = !player.capitaine;

//     Joueurs.forEach(j => {
//         j.capitaine = nouveauCapitaine && j.id === player.id;
//     });
//     localStorage.setItem(key, JSON.stringify(Joueurs));
//     afficherJoueurs();
// });