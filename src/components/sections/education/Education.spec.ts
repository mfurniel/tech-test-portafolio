import { test, expect } from "@playwright/test";
import { ui, languages } from "../../../i18n/ui";

const langs = Object.keys(languages) as Array<keyof typeof languages>;

test.describe("Education Section (#education)", () => {
  const educationSelector = "#education";

  for (const lang of langs) {
    const t = ui[lang];

    test.describe(`${lang.toUpperCase()} locale`, () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(`/${lang}/#education`);
      });

      test("Should display the title", async ({ page }) => {
        const title = page.locator(`${educationSelector} h1`).first();
        await expect(title).toContainText(t["section.education.title"]);
      });

      test("Should display the titles in the education cards", async ({
        page,
      }) => {
        const titleCards = await page.locator(`${educationSelector} h2`).all();
        await expect(titleCards[0]).toContainText(
          t["education.salesiano.title"],
        );
        await expect(titleCards[1]).toContainText(t["education.udec.title"]);
      });

      test("Should display the content in the education cards", async ({
        page,
      }) => {
        const contentCards = await page.locator(`${educationSelector} p`).all();
        await expect(contentCards[0]).toContainText(
          t["education.salesiano.description"],
        );
        await expect(contentCards[1]).toContainText(
          t["education.udec.description"],
        );
      });
    });
  }
});
