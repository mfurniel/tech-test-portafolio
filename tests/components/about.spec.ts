import { test, expect } from '@playwright/test';

test.describe('About Component', () => {

  test('should render the main title', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#about h1.text-4xl')).toHaveText('Sobre mí');
  });

  test.describe('Profile Image', () => {
    test('should render the profile image', async ({ page }) => {
      await page.goto('/');
      await expect(page.locator('img[alt="Descripción de la imagen"]')).toBeVisible();
    });

    test('should have the correct styling', async ({ page }) => {
      await page.goto('/');
      const image = page.locator('img[alt="Descripción de la imagen"]');
      await expect(image).toHaveClass(/rounded-full/);
      await expect(image).toHaveClass(/border-2/);
      await expect(image).toHaveClass(/border-blue-900/);
      await expect(image).toHaveClass(/object-cover/);
    });
  });

  test.describe('Info Box', () => {
    test('should render the info box with correct text', async ({ page }) => {
      await page.goto('/');
      await expect(page.locator('.info-box p:first-child')).toContainText(
        '¡Hola! Soy Mauricio, Ingeniero Civil Informático'
      );
      await expect(page.locator('.info-box p:nth-child(2)')).toContainText(
        'Actualmente, me estoy enfocando en ampliar mi portafolio'
      );
    });

    test('should render the tech list', async ({ page }) => {
      await page.goto('/');
      await expect(page.locator('.info-box ul:first-child li:first-child')).toHaveText('React');
      await expect(page.locator('.info-box ul:nth-child(2) li:last-child')).toHaveText('Tailwind');
    });

    test('should render the download CV link', async ({ page }) => {
      await page.goto('/');
      await expect(page.locator('a[href*="drive.google.com"]')).toBeVisible();
      await expect(page.locator('a[href*="drive.google.com"]')).toHaveText('Descarga mi CV');
    });

    test('should apply the correct styling', async ({ page }) => {
      await page.goto('/');
      const infoBox = page.locator('.info-box');
      await expect(infoBox).toHaveClass(/rounded-lg/);
      await expect(infoBox).toHaveClass(/bg-white/);
      await expect(infoBox).toHaveClass(/p-8/);
      await expect(infoBox).toHaveClass(/shadow-lg/);
    });
  });

  test.describe('Tech Boxes Grid', () => {
    test('should render all TechBox components', async ({ page }) => {
      await page.goto('/');
      const techBoxes = await page.locator('.grid.grid-cols-2 > div');
      await expect(techBoxes).toHaveCount(12);
    });
  });
});