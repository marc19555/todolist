const liste = document.getElementById("affiche_tache");
const buton_add_task = document.getElementById("gros_bouton");
let StockageTaches = [];

function exporterJSON() {
    const dataStr = JSON.stringify(StockageTaches, null, 2);

    const blob = new Blob([dataStr], { type: "application/json" });

    const url = URL.createObjectURL(blob);

    console.log("URL temporaire créée :", url);
    alert("JSON prêt ! URL générée dans la console.");

    return url;
}

buton_add_task.addEventListener("click", function () {

    const name_task = document.getElementById("titre").value;
    let time_task = document.getElementById("time").value;
    let priority_task = document.getElementById("priorite").value;

    if (name_task === "" || time_task ==="") {

    
        alert("Merci de remplir tous les champs");
        return;
    }

    const new_task = {
        name: name_task,
        priority: priority_task,
        time: time_task
    };

    StockageTaches.push(new_task);

    const new_task_on_screen = document.createElement("div");

    new_task_on_screen.classList.add("add_task_list")
    alert("Tache ajoutée !")

    new_task_on_screen.innerHTML = `
       <strong>${name_task}</strong>


       <div class="infos">
           <span>priorité: ${priority_task}</span>
           <span>temps: ${time_task} min</span>
       </div>
   `;

    liste.appendChild(new_task_on_screen);
    console.log("la nouvelle tache devrait apparaitre sur le html");
    document.querySelector("#titre").value = "";
    document.querySelector("#priorite").value = "";
    document.querySelector("#time").value = "";

});

