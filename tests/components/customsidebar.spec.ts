import { test, expect } from '@playwright/test';

test.describe('CustomSideBar Component', () => {

  test.describe('Menu Button Visibility', () => {
    test('should be visible on small screens (mobile)', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
      await expect(page.locator('button img[alt="Menú"]')).toBeVisible();
    });

    test('should be hidden on large screens (desktop)', async ({ page }) => {
      await page.setViewportSize({ width: 1280, height: 720 });
      await page.goto('/');
      await expect(page.locator('button img[alt="Menú"]')).not.toBeVisible();
    });
  });

});