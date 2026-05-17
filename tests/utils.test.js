import { describe, expect, it } from "vitest";
import { formatMealName, shortenText } from "../js/utils.js";

describe("utils functions", () => {
  it("removes spaces from the meal name", () => {
    expect(formatMealName(" Pasta ")).toBe("Pasta");
  });

  it("shortens long text", () => {
    expect(shortenText("Hello world", 5)).toBe("Hello...");
  });
});
