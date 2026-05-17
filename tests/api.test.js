import { describe, expect, it } from "vitest";
import { fetchRandomMeal } from "../js/api.js";

describe("fetchRandomMeal", () => {
  it("fetches a meal from the REST API", async () => {
    const meal = await fetchRandomMeal();

    expect(meal).toBeDefined();
    expect(meal.strMeal).toBeDefined();
  });
});
