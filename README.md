# Tech Test Portafolio

![Banner or Logo](public/images/techTestPortafolio.png)

## Table of Contents
1. [Requirements](#requirements)
2. [Getting Started](#getting-started)
3. [About the Project](#about-the-project)
4. [Commands](#commands)
5. [Linting and Code Quality](#linting-and-code-quality)
6. [Commands to run Prettier and ESLint](#commands-to-run-prettier-and-eslint)
7. [Commitlint](#commitlint)
8. [Husky Setup](#husky-setup)
9. [Testing with Playwright](#testing-with-playwright)


## Requirements

To run this project, ensure you have the following installed:

- **Node.js** (Latest LTS recommended)
- **npm** (Latest version recommended)
- **Astro** `^5.4.1`
- **Vue.js** `^3.5.13`
- **Tailwind CSS** `^4.0.9`
- **TypeScript** (Included in Astro by default)

## Getting Started

To set up the project locally, follow these steps:

```bash
git clone github.com/mfurniel/tech-test-portafolio.git
cd  tech-test-portafolio
npm install
npm run dev
```

## About the Project

This project is a technical test that consists of developing a single-page landing page using the following technologies:

- **Astro.js v5**
- **Tailwind CSS v4**
- **Vue.js v3.5**
- **TypeScript**

### Landing Page Sections

The landing page must include:

- **About Me** – A brief introduction about yourself.
- **Projects**– Showcasing the projects you have worked on.
- **Technologies** – Listing the technologies you have used.
- **Education** – Your academic background.

### Delivery Requirements

- **Source Code**: The project must be uploaded to a public GitHub repository.
- **Hosting**: The landing page must be deployed on Vercel (using the free tier).

### Technical Requirements

- The site must be responsive and optimized for performance and best practices.
- Implement Server-Side Rendering (SSR) with Astro.js.
- Include at least one interactive component built with Vue.js.

### Submission

- GitHub Repository URL
- Vercel Deployment URL

### Evaluation Criteria

The project will be evaluated based on the following aspects:

- **Responsiveness** – Proper adaptation to different screen sizes.
- **Google Lighthouse Score** – Performance, accessibility, best practices, and SEO.
- **Code Quality** – Clear structure, readability, modularity, and efficient use of technologies.

### Deadline

The final submission **deadline is March 9, 2025, at 23:59 hrs**.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run lint`            | Run ESLint on `.js`, `.ts`, and `.astro` files   |
| `npm run lint:fix`        | Fix ESLint issues automatically                  |
| `npm run lint:css`        | Run Stylelint on `css`, `scss`, `vue`, and `astro` files |
| `npm run lint:css:fix`    | Fix Stylelint issues automatically               |
| `npm run format`          | Format files using Prettier                      |
| `npm run prepare`         | Initialize Husky for git hooks                   |
| `npm run test:e2e`        | Run end-to-end tests with Playwright             |

## Linting and Code Quality

This project uses the following tools:

- **ESLint**: Linting for JavaScript, TypeScript, and Astro files
- **Stylelint**: Linting for CSS, SCSS, Vue, and Astro files
- **Prettier**: Code formatting
- **Husky**: Pre-commit hooks for enforcing code quality
- **Commitlint¨**: Enforce conventional commit messages

## Commands to run Prettier and ESLint

| Command                 | Action                                          |
| :---------------------- | :---------------------------------------------- |
| `npm run format`        | Format all files in the project                 |
| `npm run lint`          | Check for linting issues                        |
| `npm run lint:fix`      | Automatically fix linting issues                |
| `npm run lint:css`      | Check for style linting issues                  |
| `npm run lint:css:fix`  | Automatically fix style linting issues          |

## Commitlint

This project uses **Commitlint** to enforce conventional commit messages.

### Configuration
Commitlint is configured with [`@commitlint/config-conventional`](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional), ensuring standardized commit messages.

### Commit Message Structure
A commit message follows this structure:

```
<type>(optional scope): <description>

[optional body]

[optional footer]
```

#### Commit Types

| Type      | Description                                                   |
| :-------- | :------------------------------------------------------------ |
| **feat**  | A new feature                                                 |
| **fix**   | A bug fix                                                     |
| **docs**  | Documentation changes                                         |
| **style** | Code style (formatting, missing semicolons, etc.)             |
| **refactor** | Code changes without fixing bugs or adding features        |
| **perf**  | Performance improvements                                      |
| **test**  | Adding or updating tests                                      |
| **build** | Changes affecting the build system or dependencies            |
| **ci**    | Continuous integration configuration changes                  |
| **chore** | Maintenance tasks (build, CI, dependencies)                   |
| **revert** | Reverting a previous commit                                  |

#### Commit Example with Body and Footer

```bash
git commit -m "docs(core): improve commit message guidelines in README" \
-m "Expanded the commit message section with more details on optional body and footer usage. Also added examples for better clarity." \
-m "Related to issue #42"
```

## Husky Setup

In this project, we use **Husky** to set up **Git hooks** for pre-commit and pre-push actions. These hooks ensure code quality by running linting, tests, and build processes before committing and pushing changes.

### Pre-commit Hook

The pre-commit hook is configured to run the following commands before each commit:

| Command | Description |
| ------- | ----------- |
| `npm run lint` | Runs JavaScript/TypeScript linting to ensure code style and quality. |
| `npm run lint:css` | Runs CSS linting to check for issues with styles. |
| `npm run test:e2e` | Runs end-to-end tests with Playwright. These tests are executed locally because we don't have a pipeline set up on the server. |

These checks help maintain the integrity of the codebase and prevent bad code from being committed.

### Pre-push Hook

The pre-push hook ensures that the build process runs before pushing any changes:

| Command | Description |
| ------- | ----------- |
| `npm run build` | Builds the project to ensure everything compiles correctly before pushing. |

### Commitlint

We also use **commitlint** to enforce proper commit message formatting. This is set up through Husky and ensures that all commit messages follow the conventional commit format.

For more details about commit message formatting, check the **commitlint** configuration in the project.

This setup helps maintain code quality and prevents breaking changes from being pushed without verification.


## Testing with Playwright

In this project, we use **Playwright** for end-to-end testing. Below are some useful commands you can run within the test directory:

### Playwright Commands

| Command | Description |
| ------- | ----------- |
| `npx playwright test` | Runs the end-to-end tests. |
| `npx playwright test --ui` | Starts the interactive UI mode to run the tests visually. |
| `npx playwright test --project=chromium` | Runs the tests only on the Desktop Chrome browser. |
| `npx playwright test example` | Runs tests for a specific file. |
| `npx playwright test --debug` | Runs tests in debug mode to troubleshoot issues. |
| `npx playwright codegen` | Automatically generates tests using the Codegen mode. |

### Recommended Command

| Command | Description |
| ------- | ----------- |
| `npm run test:e2e` | Runs the end-to-end tests with Playwright in your environment. |

### Example Files

| File | Description |
| ---- | ----------- |
| `./tests/example.spec.ts` | Example end-to-end test. |
| `./tests-examples/demo-todo-app.spec.ts` | End-to-end tests for the Demo Todo App. |
| `./playwright.config.ts` | Playwright Test configuration. |

For more information on Playwright, visit the official documentation:  
[https://playwright.dev/docs/intro](https://playwright.dev/docs/intro) ✨

🎭 Happy hacking! 🎭



