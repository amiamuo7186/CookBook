const container=document.getElementById("recipesContainer")
const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]{3,60}$/;

 export let count=0
export function displayRecipes(recipes) {
// console.log(recipes)
 count=recipes.length
//  console.log(count)
    container.innerHTML = "";

    recipes.forEach(recipe => {

        const card = document.createElement("article");

        card.className = "bg-white rounded-2xl shadow-sm overflow-hidden";

        card.innerHTML = `
            <img
                src="${recipe.image}"
                alt="${recipe.name}"
                class="w-full h-48 object-cover"
            >

            <div class="p-5">

                <h3 class="text-xl font-bold">
                    ${recipe.name}
                </h3>

                <p class="text-gray-500 mt-2">
                    ${recipe.cuisine}
                </p>

                <div class="flex justify-between mt-4 text-sm">
                    <span>${recipe.difficulty}</span>
                    <span>${recipe.prepTimeMinutes} min</span>
                </div>

                <button
                    data-id="${recipe.id}"
                    class="delete-btn bg-red-500 text-white px-4 py-2 rounded-lg mt-5">
                    Supprimer
                </button>

            </div>
        `;

        container.appendChild(card);
    });
}
 export function valider(str){
     return nameRegex.test(str.trim());
}