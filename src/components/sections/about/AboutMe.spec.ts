import { test, expect } from "@playwright/test";
import { ui, languages } from "../../../i18n/ui";

const langs = Object.keys(languages) as Array<keyof typeof languages>;

test.describe("About Section (#about)", () => {
  const aboutSelector = "#about";

  for (const lang of langs) {
    const t = ui[lang];

    test.describe(`${lang.toUpperCase()} locale`, () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(`/${lang}/#about`);
      });

      test("Should display the title", async ({ page }) => {
        const title = page.locator(`${aboutSelector} h1`).first();
        await expect(title).toHaveText(t["section.aboutTitle"]);
      });

      test("Should display the profile image", async ({ page }) => {
        const profileImage = page.locator(
          `${aboutSelector} img[alt='${t["about.altProfileImage"]}']`,
        );
        await expect(profileImage).toBeVisible();
      });

      test("Should display the about text", async ({ page }) => {
        const introParagraph = page.locator(`${aboutSelector} p`).first();
        const secondParagraph = page.locator(`${aboutSelector} p`).nth(1);
        await expect(introParagraph).toContainText(
          t["about.introductionParagraph1"],
        );
        await expect(secondParagraph).toContainText(
          t["about.introductionParagraph2"],
        );
      });

      test("Should display the list of technologies", async ({ page }) => {
        const techLists = await page.locator(`${aboutSelector} ul`).all();
        await expect(techLists[0]).toContainText(
          t["about.technologiesList1Item1"],
        );
        await expect(techLists[0]).toContainText(
          t["about.technologiesList1Item2"],
        );
        await expect(techLists[0]).toContainText(
          t["about.technologiesList1Item3"],
        );
        await expect(techLists[1]).toContainText(
          t["about.technologiesList2Item1"],
        );
        await expect(techLists[1]).toContainText(
          t["about.technologiesList2Item2"],
        );
        await expect(techLists[1]).toContainText(
          t["about.technologiesList2Item3"],
        );
      });

      test("Should display the CV download button", async ({ page }) => {
        const cvButton = page.locator(
          `${aboutSelector} a[aria-label='${t["about.downloadCVLabel"]}']`,
        );
        await expect(cvButton).toBeVisible();
        await expect(cvButton).toHaveAttribute(
          "href",
          "https://drive.google.com/file/d/1NsNn5XnQY9C3z0oJMXnSmip897n0QXmm/view?usp=sharing",
        );
      });
    });
  }
});
