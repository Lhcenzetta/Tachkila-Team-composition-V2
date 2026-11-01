   export const Joueurs = [
    {
        id: 1,
        nom: "lait-zet",
        age: 33,
        numéro: 34,
        statut: "En forme",
        position: "Gardien"
    },
    {
        id: 2,
        nom: "lait-zet",
        age: 33,
        numéro: 33,
        statut: "Blessé",
        position: "Gardien"
    },
    {
        id: 3,
        nom: "lait-zet",
        age: 33,
        numéro: 32,
        statut: "Blessé",
        position: "Attaquant"
    },
    {
        id: 4,
        nom: "lait-zet",
        age: 33,
        numéro: 31,
        statut: "En forme",
        position: "Défenseur"
    },
    {
        id: 5,
        nom: "lait-zet",
        age: 33,
        numéro: 30,
        statut: "En forme",
        position: "Défenseur"
    },
    {
        id: 6,
        nom: "lait-zet",
        age: 33,
        numéro: 36,
        statut: "En forme",
        position: "Attaquant"
    },
    {
        id: 7,
        nom: "lait-zet",
        age: 33,
        numéro: 37,
        statut: "En forme",
        position: "Attaquant"
    },
    {
        id: 8,
        nom: "lait-zet",
        age: 33,
        numéro: 38,
        statut: "En forme",
        position: "Milieu"
    },
    {
        id: 9,
        nom: "lait-zet",
        age: 33,
        numéro: 40,
        statut: "En forme",
        position: "Milieu"
       },
       {
           id: 9,
           nom: "ahmed",
           age: 33,
           numéro: 40,
           statut: "En forme",
           position: "Milieu"
       }
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
