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
export const key1 = "data-match";
export const Joueurs = JSON.parse(localStorage.getItem(key) || "[]")
export const Match = JSON.parse(localStorage.getItem(key1) || "[]")
export function refresh() {
    localStorage.setItem(key, JSON.stringify(Joueurs));
}
export function refresh1() {
    localStorage.setItem(key1, JSON.stringify(Match));
}
