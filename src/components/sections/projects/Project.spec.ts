import { test, expect } from "@playwright/test";
import { ui, languages } from "../../../i18n/ui";

const langs = Object.keys(languages) as Array<keyof typeof languages>;

test.describe("Project Section (#projects)", () => {
  const projectSelector = "#projects";

  for (const lang of langs) {
    const t = ui[lang];

    test.describe(`${lang.toUpperCase()} locale`, () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(`/${lang}/#projects`);
      });

      test("Should display the title", async ({ page }) => {
        const title = page.locator(`${projectSelector} h1`).first();
        await expect(title).toHaveText(t["section.projectsTitle"]);
      });

      test("Should display info for Glanz project", async ({ page }) => {
        const card = page.locator(`${projectSelector} section`).nth(0);
        await expect(card.locator("h1")).toHaveText(t["projects.glanz.title"]);
        await expect(card.locator("p")).toHaveText(
          t["projects.glanz.description"],
        );
        await expect(
          card.locator(
            'a[href="https://play.google.com/store/apps/details?id=com.grauss.glanz"]',
          ),
        ).toHaveAttribute(
          "href",
          "https://play.google.com/store/apps/details?id=com.grauss.glanz",
        );
      });

      test("Should display info for Portfolio Website project", async ({
        page,
      }) => {
        const card = page.locator(`${projectSelector} section`).nth(1);
        await expect(card.locator("h1")).toHaveText(
          t["projects.portfolio.title"],
        );
        await expect(card.locator("p")).toHaveText(
          t["projects.portfolio.description"],
        );
        await expect(
          card.locator(
            'a[href="https://mfurniel.github.io/mfurnielc_portafolio/"]',
          ),
        ).toHaveAttribute(
          "href",
          "https://mfurniel.github.io/mfurnielc_portafolio/",
        );
      });

      test("Should display info for Dashboard project", async ({ page }) => {
        const card = page.locator(`${projectSelector} section`).nth(2);
        await expect(card.locator("h1")).toHaveText(
          t["projects.dashboard.title"],
        );
        await expect(card.locator("p")).toHaveText(
          t["projects.dashboard.description"],
        );
      });

      test("Should display info for Tech Test Portfolio project", async ({
        page,
      }) => {
        const card = page.locator(`${projectSelector} section`).nth(3);
        await expect(card.locator("h1")).toHaveText(
          t["projects.techTestPortfolio.title"],
        );
        await expect(card.locator("p")).toHaveText(
          t["projects.techTestPortfolio.description"],
        );
        await expect(
          card.locator(
            'a[href="https://github.com/mfurniel/tech-test-portafolio"]',
          ),
        ).toHaveAttribute(
          "href",
          "https://github.com/mfurniel/tech-test-portafolio",
        );
      });
    });
  }
});
