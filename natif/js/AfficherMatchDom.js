import { DeleteMatch } from "./DeleteMatch.js";
import { ModificationMatch } from "./ModificationMatch.js";
import { Match, refresh1 } from "./stockage.js";
import { afficherMessage } from "./validation.js";
const sectionMatch = document.querySelector("#Carte-Match"); 
const btnScore = document.querySelector("#btnScore");
const formScore = document.querySelector("#formScore");
const btn_score = document.querySelector("#btnEnregistrerScore")


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

    if (match.domicile === true)
    {
        lieu.className = "rounded-lg bg-green px-3 py-1 text-sm font-bold text-emerald-300";
        lieu.textContent = "🏠 Domicile";
    }
    else
    {
        lieu.className = "w-fit rounded-lg bg-[#0013b7]-500/20 px-3 py-1 text-sm font-bold text-red-300";
        lieu.textContent = "✈️ Extérieur";
    }
    const titre = document.createElement("h2");
    titre.className = "text-xl font-bold text-white";

    if (match.domicile === true)
    {
        titre.textContent = "Atlas FC vs " + match.adversaire;
    }
    else
    {
        titre.textContent = match.adversaire + " vs Atlas FC";
    }
    const stade = document.createElement("p");
    stade.className = "text-sm text-slate-300";
    stade.textContent = "🏟️ " + match.lieu;


    const actions = document.createElement("div");
    actions.className = "flex items-center gap-3";
    const btnEdit = document.createElement("button");
    btnEdit.textContent = "✍🏻 Modifier";
    btnEdit.className = "rounded-lg bg-blue px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-500";
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "🗑️ Supprimer";
    btnDelete.className = "rounded-lg bg-red px-4 py-2 text-sm font-bold text-white transition hover:bg-red-500";

    const status_match = document.createElement("div");
    const Heure = match.Heure ?? match.heure;

    const dateMatch = new Date(match.date + "T" + Heure);
    const estPassee = !isNaN(dateMatch.getTime()) && dateMatch.getTime() <= Date.now();
    if (estPassee && !isNaN(dateMatch.getTime())) {
        const btnScore = document.createElement("button");
        btnScore.textContent = "⚽ Saisir le score";
        btnScore.className = "rounded-lg bg-blue-600 px-4 py-2 text-white font-bold hover:bg-blue-500";
        btnScore.addEventListener("click", () => {
            formScore.classList.remove("hidden")
            btn_score.addEventListener("click", () => {
                const scoreNous = document.querySelector("#scoreNous").value;
                const scoreAdversaire = document.querySelector("#scoreAdversaire").value;
                match.scoreNous = Number(scoreNous);
                match.scoreAdversaire = Number(scoreAdversaire);
                afficherMessage("Score enregistré !", true);
                formScore.classList.add("hidden")
                btnScore.textContent = match.scoreNous != null ? "✏️ Modifier le score" : "⚽ Saisir le score";
                refresh1()
                afficherMatchs();
            })

        });
        status_match.append(btnScore);
    }
    const resultat = document.createElement("div");
    resultat.className = "text-center text-xl font-bold";
    if (match.scoreNous == null || match.scoreAdversaire == null) {
        resultat.textContent = "À venir";
        resultat.classList.add("text-gray-400");
    }
    else {
        if (match.domicile === true) {
            resultat.textContent = match.scoreNous + " - " + match.scoreAdversaire;
        }
        else {
            resultat.textContent = match.scoreAdversaire + " - " + match.scoreNous;
        }
        if (match.scoreNous > match.scoreAdversaire) {
            resultat.textContent += " | Victoire";
            resultat.classList.add("text-green-400");
        }
        else if (match.scoreNous < match.scoreAdversaire) {
            resultat.textContent += " | Défaite";
            resultat.classList.add("text-red-400");
        }
        else {
            resultat.textContent += " | Match nul";
            resultat.classList.add("text-yellow-400");
        }
    }
    actions.append(btnEdit, btnDelete);
    info.append(lieu, titre, stade);
    card.append(blocDate,info,resultat,status_match , actions);
    DeleteMatch(match, btnDelete, card)
    ModificationMatch(btnEdit, match)
    
    return card;
}

export function afficherMatchs() {
    sectionMatch.innerHTML = "";
    Match.forEach(match => {
        sectionMatch.append(AfficherMatchCartes(match));
    });
}

afficherMatchs();
