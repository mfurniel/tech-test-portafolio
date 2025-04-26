import { test, expect } from "@playwright/test";

test.describe("Layout", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should have the correct title", async ({ page }) => {
    await expect(page).toHaveTitle("Tech Test Portafolio");
  });

  test("should apply the correct brackgroun color", async ({ page }) => {
    await expect(page.locator("body")).toHaveClass("bg-bg-oficial");
  });

  test("should apply the correct padding and margin", async ({ page }) => {
    await expect(page.locator("main")).toHaveClass("p-8 lg:ml-28");
  });
});
