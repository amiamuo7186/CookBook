import{loadCard}from "./service/api.js"
import{displayRecipes,count,valider} from "./ui.js"
const btnAjout=document.getElementById("openModal")
const nombre=document.getElementById("recipeCount")
const modal=document.getElementById("recipeModal")
const btnAnnuler=document.getElementById("closeModal")
const btnAnnuler2=document.getElementById("cancelModal")
const form=document.getElementById("recipeForm")
const recipeName=document.getElementById("recipeName")
const typeCuisine=document.getElementById("cuisine")
const difficulty=document.getElementById("difficulty")
async function appel() {
    const datae = await loadCard();
    // console.log(datae.recipes)

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

btnAnnuler.addEventListener("click",()=>{
  modal.close()
})
btnAnnuler2.addEventListener("click",()=>{
  modal.close()
})
form.addEventListener("submit",(e)=>{
  e.preventDefault()

  if (!valider(recipeName.value)){
     recipeName.nextElementSibling.textContent="ressayer une autre fois" 
  }
  else {
     recipeName.nextElementSibling.textContent="" 
  }
   if (!valider(typeCuisine.value)){
     typeCuisine.nextElementSibling.textContent="ressayer une autre fois" 
  }
  else {
     typeCuisine.nextElementSibling.textContent="" 
  }
  if(!difficulty.value){
    difficulty.nextElementSibling.textContent="choissir un element"
  }
  else{
    difficulty.nextElementSibling.textContent=""
  }
})
