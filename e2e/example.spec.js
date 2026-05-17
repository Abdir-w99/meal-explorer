// @ts-check
import { test, expect } from "@playwright/test";

test("shows a random meal after clicking the button", async ({ page }) => {
  await page.goto("http://127.0.0.1:3000");

  await page.getByRole("button", { name: "Get Random Meal" }).click();

  await expect(page.locator("#mealContainer h2")).toBeVisible();
  await expect(page.locator("#mealContainer img")).toBeVisible();
});
