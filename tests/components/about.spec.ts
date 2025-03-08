import { test, expect } from "@playwright/test";

test.describe("About Section (#about)", () => {
  const aboutSelector = "#about";

  test.beforeEach(async ({ page }) => {
    await page.goto("/#about");
  });

  test("Should display the title", async ({ page }) => {
    const title = page.locator(`${aboutSelector} h1`).first();
    await expect(title).toContainText("Sobre mí");
  });

  test("Should display the profile image", async ({ page }) => {
    const profileImage = page.locator(
      `${aboutSelector} img[alt='Imagen de perfil']`,
    );
    await expect(profileImage).toBeVisible();
  });

  test("Should display the about text", async ({ page }) => {
    const introParagraph = page.locator(`${aboutSelector} p`).first();
    const secondParagraph = page.locator(`${aboutSelector} p`).nth(1);
    await expect(introParagraph).toContainText("¡Hola! Soy Mauricio");
    await expect(secondParagraph).toContainText(
      "Actualmente, me estoy enfocando en",
    );
  });

  test("Should display the list of technologies", async ({ page }) => {
    const techLists = await page.locator(`${aboutSelector} ul`).all();
    await expect(techLists[0]).toContainText("React");
    await expect(techLists[0]).toContainText("Vue");
    await expect(techLists[0]).toContainText("TypeScript");
    await expect(techLists[1]).toContainText("Ruby and Rails");
    await expect(techLists[1]).toContainText("Flutter");
    await expect(techLists[1]).toContainText("Tailwind");
  });

  test("Should display the CV download button", async ({ page }) => {
    const cvButton = page.locator(
      `${aboutSelector} a[aria-label='Descargar mi currículum vitae']`,
    );
    await expect(cvButton).toBeVisible();
    await expect(cvButton).toHaveAttribute(
      "href",
      "https://drive.google.com/file/d/1NsNn5XnQY9C3z0oJMXnSmip897n0QXmm/view?usp=sharing",
    );
  });
});
