// @vitest-environment jsdom

import { describe, expect, it } from "vitest";
import { displayMeal } from "../js/dom.js";

describe("displayMeal", () => {
  it("shows meal name and image in the DOM", () => {
    document.body.innerHTML = `<section id="mealContainer"></section>`;

    const meal = {
      strMeal: " Pasta ",
      strMealThumb: "pasta.jpg",
      strInstructions: "Cook the pasta and serve it.",
    };

    displayMeal(meal);

    const heading = document.querySelector("h2");
    const image = document.querySelector("img");

    expect(heading.textContent).toBe("Pasta");
    expect(image.src).toContain("pasta.jpg");
  });
});
