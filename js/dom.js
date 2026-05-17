import { formatMealName, shortenText } from "./utils.js";

export function displayMeal(meal) {
  const mealContainer = document.querySelector("#mealContainer");

  const mealName = formatMealName(meal.strMeal);
  const mealInstructions = shortenText(meal.strInstructions, 250);

  mealContainer.innerHTML = `
    <h2>${mealName}</h2>
    <img src="${meal.strMealThumb}" alt="${mealName}" />
    <p>${mealInstructions}</p>
  `;
}
