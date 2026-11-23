import{loadCard}from "./service/api.js"
import{displayRecipes,count} from "./ui.js"
const btnAjout=document.getElementById("openModal")
const nombre=document.getElementById("recipeCount")
const modal=document.getElementById("recipeModal")
async function appel() {
    const datae = await loadCard();
    console.log(datae.recipes)

  try {
    const datae = await loadCard();
    displayRecipes(datae.recipes);
     nombre.textContent=count
   
  } catch (error) {
    console.log("Erreur :", error);
   
  }
}
appel()
btnAjout.addEventListener("click",()=>{
    modal.showModal()
})


