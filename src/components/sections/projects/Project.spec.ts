import { test, expect } from "@playwright/test";

test.describe("Project Section (#projects)", () => {
  const projectSelector = "#projects";

  test.beforeEach(async ({ page }) => {
    await page.goto("/#projects");
  });

  test("Should display the title", async ({ page }) => {
    const title = page.locator(`${projectSelector} h1`).first();
    await expect(title).toHaveText("Proyectos");
  });

  test("Should display the correct information for Glanz Optical Calculator Transposition project", async ({
    page,
  }) => {
    const glanzProjectCard = page.locator(`${projectSelector} section`).nth(0);
    const title = glanzProjectCard.locator("h1");
    await expect(title).toHaveText("Glanz Optical Calculator Transposition");
    const description = glanzProjectCard.locator("p");
    await expect(description).toHaveText(
      "Glanz es una aplicación móvil creada para realizar el cálculo de la transposición óptica de recetas de lentes. Actualmente está disponible en la Play Store.",
    );
    const projectLink = glanzProjectCard.locator(
      'a[href="https://play.google.com/store/apps/details?id=com.grauss.glanz"]',
    );
    await expect(projectLink).toHaveAttribute(
      "href",
      "https://play.google.com/store/apps/details?id=com.grauss.glanz",
    );
  });

  test("Should display the correct information for Personal Portfolio Website project", async ({
    page,
  }) => {
    const portfolioProjectCard = page
      .locator(`${projectSelector} section`)
      .nth(1);
    const title = portfolioProjectCard.locator("h1");
    await expect(title).toHaveText("Personal Portfolio Website");

    const description = portfolioProjectCard.locator("p");
    await expect(description).toHaveText(
      "Un portafolio personal creado para mostrar proyectos y habilidades como desarrollador web, utilizando tecnologías modernas.",
    );

    const projectLink = portfolioProjectCard.locator(
      'a[href="https://mfurniel.github.io/mfurnielc_portafolio/"]',
    );
    await expect(projectLink).toHaveAttribute(
      "href",
      "https://mfurniel.github.io/mfurnielc_portafolio/",
    );
  });

  test("Should display the correct information for Dashboard de Adherencia project", async ({
    page,
  }) => {
    const dashboardProjectCard = page
      .locator(`${projectSelector} section`)
      .nth(2);
    const title = dashboardProjectCard.locator("h1");
    await expect(title).toHaveText("Dashboard de Adherencia");

    const description = dashboardProjectCard.locator("p");
    await expect(description).toHaveText(
      "Dashboard creado para mostrar la adherencia de los pacientes a sus tratamientos médicos.",
    );
  });

  test("Should display the correct information for Portofolio de Prueba Técnica project", async ({
    page,
  }) => {
    const techTestProjectCard = page
      .locator(`${projectSelector} section`)
      .nth(3);
    const title = techTestProjectCard.locator("h1");
    await expect(title).toHaveText("Portofolio de Prueba Técnica");

    const description = techTestProjectCard.locator("p");
    await expect(description).toHaveText(
      "Un portafolio personal creado como parte de una prueba técnica. ¡Estás trabajando en este proyecto ahora mismo!",
    );

    const githubLink = techTestProjectCard.locator(
      'a[href="https://github.com/mfurniel/tech-test-portafolio"]',
    );
    await expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/mfurniel/tech-test-portafolio",
    );
  });
});
