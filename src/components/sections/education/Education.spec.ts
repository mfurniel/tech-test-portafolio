import { test, expect } from "@playwright/test";

test.describe("Education Section (#education)", () => {
  const educationSelector = "#education";

  test.beforeEach(async ({ page }) => {
    await page.goto("/#education");
  });

  test("Should display the title", async ({ page }) => {
    const title = page.locator(`${educationSelector} h1`).first();
    await expect(title).toContainText("Educación");
  });

  test("Should display the titles in the education cards", async ({ page }) => {
    const titleCards = await page.locator(`${educationSelector} h2`).all();
    await expect(titleCards[0]).toContainText("Liceo Salesiano Domingo Savio ");
    await expect(titleCards[1]).toContainText("Universidad de Concepción");
  });

  test("Should display the content in the education cards", async ({
    page,
  }) => {
    const contentCards = await page.locator(`${educationSelector} p`).all();
    await expect(contentCards[0]).toContainText(
      "Mi formación de educación media la realicé en el Liceo Salesiano Domingo Savio, Concepción, Chile.",
    );
    await expect(contentCards[1]).toContainText(
      "Soy Ingeniero Civil Informático, titulado en 2024 de la Universidad de Concepción, ubicada en Concepción, Chile, correspondiente a la generación de 2018.",
    );
  });
});
