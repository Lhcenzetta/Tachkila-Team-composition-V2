Joueurs = [];
const posts = [
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
const key = "data-joueurs";
const btn = document.querySelector("#Btn-add");
const modaljoueur = document.querySelector("#modaljoueur")
const JoueursDispo = document.querySelector("#joueur")
const CardJoueur = document.querySelector("#CardJoueur")
const save_btn = document.querySelector("#save-btn")
const btnColose = document.querySelector("#btnClose");
const annulerbtn = document.querySelector("#Annuler-btn")
const GB = document.querySelector(".name")
const dg = document.querySelector(".p-dg")
const dc1 = document.querySelector(".p-dc1")
const dc2 = document.querySelector(".p-dc2")
const dd = document.querySelector(".p-dd")
const mg = document.querySelector(".p-mg")
const mc1 = document.querySelector(".p-mc1")
const mc2 = document.querySelector(".p-mc2")
const md = document.querySelector(".p-md")
const bu1 = document.querySelector(".p-bu1")
const bu2 = document.querySelector(".p-bu2")
const playerCount = document.querySelector("#playerCount")
const confirmationModal = document.querySelector("#modal-confirmation")
const confirmedelete = document.querySelector("#confirmedelete")
const AnnulerConfirmation = document.querySelector("#Annuler-confirmation")

function refresh() {
    const rs = localStorage.getItem(key);

    Joueurs = rs ? JSON.parse(localStorage.getItem(key)) : [];
}

function DeleteJoueur(btnDelete, cardj, player) {
    btnDelete.addEventListener("click", () => {
        const index = Joueurs.findIndex(j => j.id === player.id);
        confirmationModal.classList.remove('hidden')
        confirmedelete.addEventListener("click", () => {
            if (index !== -1) {
                Joueurs.splice(index, 1);
                localStorage.setItem(key, JSON.stringify(Joueurs));
                playerCount.textContent = Joueurs.length + " joueur(s)";
                cardj.remove();
                AffichierAssingPlayer();
                confirmationModal.classList.add('hidden')
                afficherMessage("le joueur a ete supprimer !!", false)
            }
        })
        AnnulerConfirmation.addEventListener("click", () => {
            confirmationModal.classList.add('hidden')
        })

    });
}

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

    playertop.append(playernum, playerinfo, btnEdit, btnDelete);

    const playerselect = document.createElement("select");
    playerselect.classList.add("player-select");

    posts.forEach(texte => {
        const option = document.createElement("option");
        option.textContent = texte;
        playerselect.append(option);
    });
    playerselect.value = player.poste;
    playerselect.addEventListener("change", () => {
        assingJoueur(player ,playerselect)
    });

    cardj.append(playertop, playerselect);
    DeleteJoueur(btnDelete, cardj, player)
    modifierJouer(btnEdit , player)
    return cardj;
}

function afficherJoueurs() {
    JoueursDispo.textContent = "";
    Joueurs.forEach(joueur => {
        JoueursDispo.append(AfficheJoueur(joueur));
    });
}

function modifierJouer(btnEdit, player) {
    btnEdit.addEventListener("click", () => {
        const title = document.querySelector("#title");
        title.textContent = "Modifier le Joueur";

        modaljoueur.classList.add("openclose");

        const index = Joueurs.findIndex(j => j.id === player.id);

        let name = document.querySelector("#nomplayer");
        name.value = Joueurs[index].nom;

        let number = document.querySelector("#numplayer");
        number.value = Joueurs[index].numéro;

        const radio = document.querySelector(
            `input.post[value="${Joueurs[index].position}"]`
        );
        radio.checked = true;

        save_btn.removeEventListener("click", AjouterJoueur);
        
        save_btn.onclick = () => {
            let newName = name.value.trim();
            let newNumber = number.value;
            let newPost = document.querySelector('input[name="post"]:checked').value;
            const valid = valide_input_name(newName, newNumber, false);
            if (valid && newPost) {
                Joueurs[index].nom = newName;
                Joueurs[index].numéro = newNumber;
                Joueurs[index].position = newPost;
                localStorage.setItem(key, JSON.stringify(Joueurs));

                AffichierAssingPlayer()
                afficherJoueurs()
                afficherMessage("success modified", true)
                modaljoueur.classList.remove("openclose");
            }
            else if (valid && !selectedPost) {
                afficherMessage("Veuillez selectionner une position !", false);
            }
        };
    });
}

function AjouterJoueur()
{
    let name = document.querySelector("#nomplayer").value.trim();
    let number = document.querySelector("#numplayer").value.trim();
    let selectedPost = document.querySelector('input[name="post"]:checked')?.value;

    const valid = valide_input_name(name, number,true);

    if (valid && selectedPost)
    {
        Joueurs.push(
        {
            id: Joueurs.length + 1,
            nom: name,
            numéro: Number(number),
            poste: "Sur le banc",
            position: selectedPost
        });
        afficherJoueurs();
        modaljoueur.classList.remove("openclose");
        afficherMessage("Joueur ajoute avec succes !", true);
        localStorage.setItem(key, JSON.stringify(Joueurs));

    }
    else if (valid && !selectedPost)
    {
        afficherMessage("Veuillez selectionner une position !", false);
    }
    playerCount.textContent = Joueurs.length + " joueur(s)"
}

function assingJoueur(player, playerselec) {
    const index = Joueurs.findIndex(j => j.id === player.id);
    if (index === -1) return;

    const nvpost = playerselec.value;
    const ancpost = Joueurs[index].poste;

    const occupe = Joueurs.some(j =>
        j.id !== player.id && j.poste === nvpost
    );

    if (occupe && nvpost !== "Sur le banc") {
        afficherMessage("Ce poste est deja occupe !" , false);
        playerselec.value = ancpost;
        return;
    }
    let valide = false;
    if (nvpost === "Sur le banc") {
        valide = true;
    }
    else if (player.position === "Gardien" && nvpost.startsWith("GB")) {
        valide = true;
    }
    else if (player.position === "Défenseur" &&
        (nvpost.startsWith("DG") || nvpost.startsWith("DC") || nvpost.startsWith("DD"))) {
        valide = true;
    }
    else if (player.position === "Milieu" &&
        (nvpost.startsWith("MG") || nvpost.startsWith("MC") || nvpost.startsWith("MD"))) {
        valide = true;
    }
    else if (player.position === "Attaquant" && nvpost.startsWith("BU")) {
        valide = true;
    }

    if (valide === false) {
        afficherMessage("Ce poste ne correspond pas a la position du joueur !" ,false);
        playerselec.value = ancpost;
        return;
    }
    else {
        afficherMessage("le joueure a ete assigner avec success", true);
        Joueurs[index].poste = nvpost;
        localStorage.setItem(key, JSON.stringify(Joueurs));
    }
    AffichierAssingPlayer();
}

function AffichierAssingPlayer() {
    GB.textContent = "Libre";
    dg.textContent = "Libre";
    dc1.textContent = "Libre";
    dc2.textContent = "Libre";
    dd.textContent = "Libre";
    mg.textContent = "Libre";
    mc1.textContent = "Libre";
    mc2.textContent = "Libre";
    md.textContent = "Libre";
    bu1.textContent = "Libre";
    bu2.textContent = "Libre";
    for (let i = 0; i < Joueurs.length; i++) {

        if (Joueurs[i].position === "Gardien") {
            if (Joueurs[i].poste === "GB - Gardien") {
                GB.textContent = Joueurs[i].nom;
            }
        }
        else if (Joueurs[i].position === "Défenseur") {

            if (Joueurs[i].poste === "DG - Défenseur gauche")
                dg.textContent = Joueurs[i].nom;

            else if (Joueurs[i].poste === "DC - Défenseur central 1")
                dc1.textContent = Joueurs[i].nom;

            else if (Joueurs[i].poste === "DC - Défenseur central 2")
                dc2.textContent = Joueurs[i].nom;

            else if (Joueurs[i].poste === "DD - Défenseur droit")
                dd.textContent = Joueurs[i].nom;
        }
        else if (Joueurs[i].position === "Milieu") {

            if (Joueurs[i].poste === "MG - Milieu gauche")
                mg.textContent = Joueurs[i].nom;

            else if (Joueurs[i].poste === "MC - Milieu central 1")
                mc1.textContent = Joueurs[i].nom;

            else if (Joueurs[i].poste === "MC - Milieu central 2")
                mc2.textContent = Joueurs[i].nom;

            else if (Joueurs[i].poste === "MD - Milieu droit")
                md.textContent = Joueurs[i].nom;
        }
            
        else if (Joueurs[i].position === "Attaquant") {

            if (Joueurs[i].poste === "BU - Buteur 1")
                bu1.textContent = Joueurs[i].nom;

            else if (Joueurs[i].poste === "BU - Buteur 2")
                bu2.textContent = Joueurs[i].nom;
        }
    }
}

function afficherMessage(texte, success) {
    const notification = document.querySelector("#notification");
    const message = document.querySelector("#message");

    message.textContent = texte;

    if (success) {
        notification.classList.remove("bg-red-100", "border-red-500");
        notification.classList.add("bg-green-100", "border-green-500");

        message.classList.remove("text-red-700");
        message.classList.add("text-green-700");
    }
    else {
        notification.classList.remove("bg-green-100", "border-green-500");
        notification.classList.add("bg-red-100", "border-red-500");

        message.classList.remove("text-green-700");
        message.classList.add("text-red-700");
    }
    notification.classList.remove("hidden");
    setTimeout(() => {
        notification.classList.add("hidden");
    }, 2000);
}

function valide_input_name(name, number, check_in) {
    let valid = true;

    if (name === "") {
        afficherMessage("Le nom est obligatoire !", false);
        valid = false;
    }
    else if (!/^[a-zA-ZÀ-ÿ' -]{2,30}$/.test(name)) {
        afficherMessage("Le nom doit etre vrai nom!", false);
        valid = false;
    }
    else if (number === "" || Number(number) < 1 || Number(number) > 99) {
        afficherMessage("Le numéro doit être entre 1 et 99 !", false);
        valid = false;
    }
    else if (Joueurs.some(j => Number(j.numéro) === Number(number)) && check_in ) {
        afficherMessage("Ce numéro est deja utilise par un joueur !", false);
        valid = false;
    }

    return valid;
}



save_btn.addEventListener("click", AjouterJoueur)

btn.addEventListener("click", () => {
    const title = document.querySelector("#title")
    title.textContent = "Ajouter le Joueur"
    modaljoueur.classList.toggle("openclose");
})

btnColose.addEventListener("click", () => {
    modaljoueur.classList.toggle("openclose");
})
annulerbtn.addEventListener("click", () => {
    modaljoueur.classList.remove("openclose")
})
refresh()
AffichierAssingPlayer()
afficherJoueurs();
playerCount.textContent = Joueurs.length + " joueur(s)" 

