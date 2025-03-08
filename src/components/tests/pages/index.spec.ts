import { test, expect } from "@playwright/test";

test.describe("Index Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("Should display the home section", async ({ page }) => {
    await expect(page.locator("section#home")).toBeVisible();
  });
  test("Should display the about section", async ({ page }) => {
    await expect(page.locator("section#about")).toBeVisible();
  });
  test("Should display the education section", async ({ page }) => {
    await expect(page.locator("section#education")).toBeVisible();
  });
  test("Should display the work experience section", async ({ page }) => {
    await expect(page.locator("section#work_experience")).toBeVisible();
  });
  test("Should display the academic experience section", async ({ page }) => {
    await expect(page.locator("section#academic_experience")).toBeVisible();
  });
  test("Should display the projects section", async ({ page }) => {
    await expect(page.locator("section#projects")).toBeVisible();
  });
});
