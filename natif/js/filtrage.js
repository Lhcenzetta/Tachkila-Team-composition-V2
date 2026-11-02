
import { btns } from "../../script.js";
import { Joueurs } from "./stockage.js";
import { AfficheJoueur, afficherJoueurs, JoueursDispo } from "./interface.js";
import { pagination } from "./pagination.js";

export function filter() {
    let positions = [];
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            const value = btn.textContent.trim();
            if (value === "Tous") {
                positions = [];
            }
            else if (positions.includes(value)) {
                const index = positions.indexOf(value);
                positions.splice(index, 1);
            }
            else {
                positions.push(value);
            }

            if (positions.length === 0) {
                afficherJoueurs();
            }
            else {
                JoueursDispo.textContent = "";

                Joueurs.forEach(joueur => {
                    if (positions.includes(joueur.position)) {
                        JoueursDispo.append(AfficheJoueur(joueur));
                    }
                });
            }
            btns.forEach(b => {
                const texte = b.textContent.trim();
                if (positions.includes(texte) || (texte === "Tous" && positions.length === 0))
                {
                    b.classList.add("bg-green-600", "text-white");
                    b.classList.remove("bg-slate-800/50", "text-slate-300");
                }
                else {
                    b.classList.remove("bg-green-600", "text-white");
                    b.classList.add("bg-slate-800/50", "text-slate-300");
                }
            });

            pagination();
        });
    });
}
