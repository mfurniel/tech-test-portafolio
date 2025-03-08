import { test, expect } from "@playwright/test";
import { experiencesAcademyc } from "../../src/data/experiences";

test.describe("Academic Experience Section", () => {
  const experienceSelector = "#academic_experience";

  test.beforeEach(async ({ page }) => {
    await page.goto("/#academic_experience");
  });

  test("Should display the first experience by default", async ({ page }) => {
    const firstExperience = experiencesAcademyc[0];

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
    for (let i = 0; i < experiencesAcademyc.length; i++) {
      const experience = experiencesAcademyc[i];

      await page.goto("${experienceSelector}");

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
      await expect(experienceDuration).toHaveText(experience.duration || "");

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
          await expect(technologiesList.nth(k)).toContainText(
            experience.technologies[k],
          );
        }
      }
    }
  });
});
