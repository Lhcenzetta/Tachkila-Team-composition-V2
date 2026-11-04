import { Match } from "./stockage.js";

const sectionMatch = document.querySelector("#Carte-Match"); 



export function AfficherMatchCartes(match) {

    const card = document.createElement("div");

    if (match.domicile === true)
    {
        card.className = "flex w-full flex-wrap items-center gap-5 rounded-2xl border border-emerald-400/40 border-l-4 border-l-green-400 bg-[#103b39] p-5 text-white shadow-xl transition hover:shadow-green-500/20";
    }
    else
    {
        card.className = "flex w-full flex-wrap items-center gap-5 rounded-2xl border border-violet-400/40 border-l-4 border-l-blue-400 bg-[#0013b7] p-5 text-white shadow-xl transition hover:shadow-blue-500/20";
    }
    const blocDate = document.createElement("div");
    blocDate.className = "flex w-50 shrink-0 flex-col items-center justify-center rounded-xl border border-white/10 bg-[#4c4c54] p-4";

    const date = document.createElement("p");
    date.className = "text-sm font-bold text-white";
    date.textContent = match.date;

    const heure = document.createElement("p");
    heure.className = "mt-2 text-sm text-slate-400";
    heure.textContent = match.heure;
    blocDate.append(date, heure);
    const info = document.createElement("div");
    info.className = "flex min-w-0 flex-1 flex-col gap-2";
    const lieu = document.createElement("span");

    if (match.domicile === true) {
        lieu.className = "rounded-lg bg-green px-3 py-1 text-sm font-bold text-emerald-300";
        lieu.textContent = "🏠 Domicile";
    }
    else {
        lieu.className = "w-fit rounded-lg bg-[#0013b7]-500/20 px-3 py-1 text-sm font-bold text-red-300";
        lieu.textContent = "✈️ Extérieur";
    }
    const titre = document.createElement("h2");
    titre.className = "text-xl font-bold text-white";

    if (match.domicile === true) {
        titre.textContent = "Atlas FC vs " + match.adversaire;
    }
    else {
        titre.textContent = match.adversaire + " vs Atlas FC";
    }
    const stade = document.createElement("p");
    stade.className = "text-sm text-slate-300";
    stade.textContent = "🏟️ " + match.lieu;

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
    
    info.append(lieu, titre, stade);
    card.append(blocDate, info);

    return card;
}



function afficherMatchs() {
    sectionMatch.innerHTML = "";

    Match.forEach(match => {
        sectionMatch.append(AfficherMatchCartes(match));
    });
}

afficherMatchs();
