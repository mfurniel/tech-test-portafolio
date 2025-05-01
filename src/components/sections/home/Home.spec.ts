import { test, expect } from "@playwright/test";
import { ui, languages } from "../../../i18n/ui";

const langs = Object.keys(languages) as Array<keyof typeof languages>;

test.describe("Home Section (#home)", () => {
  const homeSelector = "#home";

  for (const lang of langs) {
    const t = ui[lang];

    test.describe(`${lang.toUpperCase()} locale`, () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(`/${lang}/#home`);
      });

      test("Should display the profile image", async ({ page }) => {
        const profileImage = page.locator(
          `${homeSelector} img[alt='${t["home.alt.profile.image"]}']`,
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
        await expect(jobTitle).toHaveText(t["profile.profession"]);
      });

      test("Should display the university", async ({ page }) => {
        const university = page.locator(`${homeSelector} p.text-base`);
        await expect(university).toBeVisible();
        await expect(university).toHaveText(t["profile.university"]);
      });

      test("Should display the social media icons", async ({ page }) => {
        const githubIcon = page.locator(
          `${homeSelector} a[aria-label='${t["home.arial.label.github"]}']`,
        );
        const linkedinIcon = page.locator(
          `${homeSelector} a[aria-label='${t["home.arial.label.linkedin"]}']`,
        );

        await expect(githubIcon).toBeVisible();
        await expect(linkedinIcon).toBeVisible();
      });

      test("Should display the 'Scroll Down!' button", async ({ page }) => {
        const scrollButton = page.locator(`${homeSelector} .animate-pulse`);
        await expect(scrollButton).toBeVisible();
      });
    });
  }
});
