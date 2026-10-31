
let pageactuel = 1;
const jouerupage = 8;
import {pagenumbers } from "../../script.js";
export function pagination() {
    const cartes = document.querySelectorAll("#joueur > div");
    const totalpages = Math.max(1, Math.ceil(cartes.length / jouerupage));
    if (pageactuel > totalpages) {
        pageactuel = totalpages;
    }
    cartes.forEach((carte, index) => {
        const debut = (pageactuel - 1) * jouerupage;
        const fin = debut + jouerupage;
        if (index >= debut && index < fin) {
            carte.style.display = "";
        } else {
            carte.style.display = "none";
        }
    });

    pagenumbers.innerHTML = "";
    for (let i = 1; i <= totalpages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;

        btn.className = i === pageactuel ? "px-4 py-2 bg-green-600 text-white rounded-lg" : "px-4 py-2 bg-slate-800 text-white rounded-lg";
        btn.onclick = () => {
            pageactuel = i;
            pagination();
        };
        pagenumbers.append(btn);
    }
    document.getElementById("pageInfo").textContent = `Page ${pageactuel} / ${totalpages}`;
    document.getElementById("prevPage").disabled = pageactuel === 1;
    document.getElementById("nextPage").disabled = pageactuel === totalpages;
}
document.getElementById("nextPage").onclick = () => {
    pageactuel++;
    pagination();
};
document.getElementById("prevPage").onclick = () => {
    pageactuel--;
    pagination();
};
