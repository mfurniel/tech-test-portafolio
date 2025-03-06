# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Commands to run Prettier and ESLint:

- **Format all files in the project:**

```bash
npm run format
```

- **Check for linting issues:**

```bash
npm run lint
```

- **Automatically fix issues:**

```bash
npm run lint:fix
```

- **Check for style linting issues:**

```bash
npm run lint:css
```

- **Automatically style fix issues:**

```bash
npm run lint:css:fix
```

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

### Commit Types
- **feat**: A new feature  
- **fix**: A bug fix  
- **docs**: Documentation changes  
- **style**: Code style (formatting, missing semicolons, etc.)  
- **refactor**: Code changes without fixing bugs or adding features  
- **perf**: Performance improvements  
- **test**: Adding or updating tests  
- **build**: Changes affecting the build system or dependencies  
- **ci**: Continuous integration configuration changes  
- **chore**: Maintenance tasks (build, CI, dependencies)  
- **revert**: Reverting a previous commit  

### Commit Example with Body and Footer

```bash
git commit -m "docs: improve commit message guidelines in README" \
-m "Expanded the commit message section with more details on optional body and footer usage. Also added examples for better clarity." \
-m "Related to issue #42"
```

For more details, see [Conventional Commits](https://www.conventionalcommits.org/).







