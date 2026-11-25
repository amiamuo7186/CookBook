import { loadCard, ajouter, Delete } from "./service/api.js";
import { displayRecipes, count, valider, validerTime } from "./ui.js";
const btnAjout = document.getElementById("openModal");
const nombre = document.getElementById("recipeCount");
const modal = document.getElementById("recipeModal");
const btnAnnuler = document.getElementById("closeModal");
const btnAnnuler2 = document.getElementById("cancelModal");
const form = document.getElementById("recipeForm");
const recipeName = document.getElementById("recipeName");
const typeCuisine = document.getElementById("cuisine");
const difficulty = document.getElementById("difficulty");
const prepTime = document.getElementById("prepTime");
   let copiePlats=[]
const PlatAjout = {};
async function appel() {
  const datae = await loadCard();
   copiePlats=[...datae.recipes]

  try {
    displayRecipes(datae.recipes);

    nombre.textContent = count;   
  } catch (error) {
    console.log("Erreur :", error);
  }
}
appel();
btnAjout.addEventListener("click", () => {
  modal.showModal();
});

btnAnnuler.addEventListener("click", () => {
  modal.close();
});
btnAnnuler2.addEventListener("click", () => {
  modal.close();
});
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!valider(recipeName.value)) {
    recipeName.nextElementSibling.textContent = "ressayer une autre fois";
  } else {
    recipeName.nextElementSibling.textContent = "";
    PlatAjout.name = recipeName.value;
  }
  if (!valider(typeCuisine.value)) {
    typeCuisine.nextElementSibling.textContent = "ressayer une autre fois";
  } else {
    typeCuisine.nextElementSibling.textContent = "";
    PlatAjout.cuisine = typeCuisine.value;
  }
  if (!difficulty.value) {
    difficulty.nextElementSibling.textContent = "choissir un element";
  } else {
    difficulty.nextElementSibling.textContent = "";
    PlatAjout.difficulty = difficulty.value;
  }
  if (!validerTime(prepTime.value)) {
    prepTime.nextElementSibling.textContent = "enter un nombre entre 1 et 300";
  } else {
    prepTime.nextElementSibling.textContent = "";
    PlatAjout.prepTimeMinutes = prepTime.value;
  }
  console.log(PlatAjout);
  ajouter(PlatAjout);
 copiePlats.push(PlatAjout);
  displayRecipes(copiePlats);
  
});
document.addEventListener("click", function(e) {

    const platDelete = e.target.closest("[data-id]");

    if (!platDelete) return;

    const id = Number(platDelete.dataset.id);

    copiePlats = copiePlats.filter(
        recette => recette.id !== id
    );

    displayRecipes(copiePlats);

});