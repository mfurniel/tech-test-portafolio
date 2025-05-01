import { test, expect } from "@playwright/test";
import { experiences as experiencesES } from "../../../data/es/experiences";
import { experiences as experiencesEN } from "../../../data/en/experiences";

test.describe("Experience Section (#work_experience)", () => {
  const experienceSelector = "#work_experience";

  const locales = [
    { lang: "es", data: experiencesES },
    { lang: "en", data: experiencesEN },
  ];

  for (const { lang, data } of locales) {
    test.describe(`${lang.toUpperCase()} locale`, () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(`/${lang}/#work_experience`);
      });

      test("Should display the first experience by default", async ({
        page,
      }) => {
        const firstExperience = data[0];

        const firstExperienceTitle = page
          .locator(`${experienceSelector} h2`)
          .first();
        const firstExperienceSelector = page
          .locator(`${experienceSelector} button`)
          .first();

        await expect(firstExperienceTitle).toBeVisible();
        await expect(firstExperienceTitle).toContainText(firstExperience.role);
        await expect(firstExperienceSelector).toBeVisible();
        await expect(firstExperienceSelector).toContainText(
          firstExperience.company,
        );
      });

      test("Should display experience details correctly", async ({ page }) => {
        for (let i = 0; i < data.length; i++) {
          const experience = data[i];

          const experienceButton = page
            .locator(`${experienceSelector} button`)
            .nth(i);
          await experienceButton.click();

          const experienceDescription = page.locator(
            `${experienceSelector} section`,
          );
          await expect(experienceDescription).toBeVisible();

          const experienceTitle = experienceDescription.locator("h2");
          await expect(experienceTitle).toBeVisible();
          await expect(experienceTitle).toHaveText(experience.role);

          const experienceDuration = experienceDescription.locator("p");
          await expect(experienceDuration).toBeVisible();
          await expect(experienceDuration).toHaveText(
            experience.duration || "",
          );

          const responsibilitiesList =
            experienceDescription.getByTestId("responsibilities");
          for (let j = 0; j < experience.responsibilities.length; j++) {
            await expect(responsibilitiesList.nth(j)).toBeVisible();
            await expect(responsibilitiesList.nth(j)).toHaveText(
              experience.responsibilities[j],
            );
          }

          if (experience.technologies) {
            const technologiesList =
              experienceDescription.getByTestId("technologies");
            for (let k = 0; k < experience.technologies.length; k++) {
              await expect(technologiesList.nth(k)).toBeVisible();
              await expect(technologiesList.nth(k)).toContainText(
                experience.technologies[k],
              );
            }
          }
        }
      });
    });
  }
});
