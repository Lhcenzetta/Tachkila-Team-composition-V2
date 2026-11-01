export const Joueurs = [
    { id: 1, nom: "lait-zet", numéro: 5, poste: "Sur le banc", position: "Défenseur" },
    // { id: 1, nom: "lait-zet", numéro: 5, poste: "Sur le banc", position: "Défenseur" },
    // { id: 1, nom: "lait-zet", numéro: 5, poste: "Sur le banc", position: "Défenseur" },
    // { id: 1, nom: "lait-zet", numéro: 5, poste: "Sur le banc", position: "Défenseur" },
    // { id: 1, nom: "lait-zet", numéro: 5, poste: "Sur le banc", position: "Défenseur" },
    // { id: 1, nom: "lait-zet", numéro: 5, poste: "Sur le banc", position: "Défenseur" }
];
export const posts = [
    "Sur le banc",
    "GB - Gardien",
    "DG - Défenseur gauche",
    "DC - Défenseur central 1",
    "DC - Défenseur central 2",
    "DD - Défenseur droit",
    "MG - Milieu gauche",
    "MC - Milieu central 1",
    "MC - Milieu central 2",
    "MD - Milieu droit",
    "BU - Buteur 1",
    "BU - Buteur 2"
];
export const key = "data-joueurs";
export function refresh() {
    localStorage.setItem(key, JSON.stringify(Joueurs));

    // const rs = localStorage.getItem(key);

    // Joueurs = rs ? JSON.parse(localStorage.getItem(key)) : [];
}

console.log(Joueurs)