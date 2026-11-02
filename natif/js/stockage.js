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

// export const Joueurs = [
//     {
//         id: 1,
//         nom: "lait-zet",
//         age: 33,
//         numéro: 34,
//         statut: "En forme",
//         capitan : false,
//         position: "Gardien"
//     },
//     {
//         id: 2,
//         nom: "ahmed",
//         age: 33,
//         numéro: 34,
//         statut: "En forme",
//         capitan: false,
//         position: "Gardien"
//     },
//     {
//         id: 3,
//         nom: "ali",
//         age: 33,
//         numéro: 34,
//         statut: "En forme",
//         capitan: false,
//         position: "Gardien"
//     }
// ];
export const Joueurs = JSON.parse(localStorage.getItem(key) || "[]")
export function refresh() {
    localStorage.setItem(key, JSON.stringify(Joueurs));
}
