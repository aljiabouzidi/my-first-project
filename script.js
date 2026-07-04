alert("Bienvenue sur ton site d'apprentissage !");

function changerTexte() {
    document.getElementById("message").innerHTML =
        "Bravo 👍 tu viens de modifier le contenu avec JavaScript !";
}
function resetTexte() {
    document.getElementById("message").innerHTML =
        "Clique sur le bouton pour changer ce texte";
}
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Veuillez écrire une tâche !");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    // bouton supprimer
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}