import { test, expect } from "@playwright/test";

test.describe("Home Section (#home)", () => {
  const homeSelector = "#home";

  test.beforeEach(async ({ page }) => {
    await page.goto("/#home");
  });

  test("Should display the profile image", async ({ page }) => {
    const profileImage = page.locator(
      `${homeSelector} img[alt='Imagen de perfil']`,
    );
    await expect(profileImage).toBeVisible();
  });

  test("Should display the full name", async ({ page }) => {
    const fullName = page.locator(`${homeSelector} h1`);
    await expect(fullName).toBeVisible();
    await expect(fullName).toHaveText("Mauricio Furniel Campos");
  });

  test("Should display the professional title", async ({ page }) => {
    const jobTitle = page.locator(`${homeSelector} h2`);
    await expect(jobTitle).toBeVisible();
    await expect(jobTitle).toHaveText("Ingeniero Civil Informático");
  });

  test("Should display the university", async ({ page }) => {
    const university = page.locator(`${homeSelector} p.text-s`);
    await expect(university).toBeVisible();
    await expect(university).toHaveText("Universidad de Concepción");
  });

  test("Should display the social media icons", async ({ page }) => {
    const githubIcon = page.locator(
      `${homeSelector} a[aria-label='Visitar perfil de Github']`,
    );
    const linkedinIcon = page.locator(
      `${homeSelector} a[aria-label='Visitar perfil de LinkedIn']`,
    );

    await expect(githubIcon).toBeVisible();
    await expect(linkedinIcon).toBeVisible();
  });

  test("Should display the 'Scroll Down!' button", async ({ page }) => {
    const scrollButton = page.locator(`${homeSelector} .animate-pulse`);
    await expect(scrollButton).toBeVisible();
  });
});
