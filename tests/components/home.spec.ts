import { test, expect } from "@playwright/test";

test.describe("Home Component", () => {
  test("should display personal information", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("text=Mauricio Furniel Campos")).toBeVisible();
    // await expect(page.getByRole('heading', { name: 'Ingeniero Civil Informático' })).toBeVisible();
    // await expect(page.locator('text=Universidad de Concepción')).toBeVisible();
  });

  test.describe("Element Visibility", () => {
    // test("should display profile image", async ({ page }) => {
    //   await page.goto("/");
    //   await expect(page.locator('img[alt="Imagen de perfil"]')).toBeVisible();
    // });

    test('should display "Sigue Bajando!" text', async ({ page }) => {
      await page.goto("/");
      await expect(page.locator("text=Sigue Bajando!")).toBeVisible();
    });

    test("should display github icon", async ({ page }) => {
      await page.goto("/");
      await expect(page.locator('img[alt="GitHub"]')).toBeVisible();
    });

    test("should display linkedin icon", async ({ page }) => {
      await page.goto("/");
      await expect(page.locator('img[alt="LinkedIn"]')).toBeVisible();
    });
  });

  test.describe("Responsiveness", () => {
    test("should hide sidebar on mobile devices", async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto("/");
      await expect(page.locator("#sideBar")).not.toBeVisible();
    });
  });
});
