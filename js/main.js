import { fetchRandomMeal } from "./api.js";
import { displayMeal } from "./dom.js";

const mealButton = document.querySelector("#mealButton");

mealButton.addEventListener("click", async () => {
  const meal = await fetchRandomMeal();
  displayMeal(meal);
});
