# Introduction

Progressive Web App (PWA) starter template for [Vue](https://vuejs.org/)-based Single-page application (SPA) development, leveraging various [Omni](https://github.com/capitec?q=omni-) libraries.

# Usage

1️⃣ &nbsp; Create a new [repository from this template](https://github.com/capitec/template-pwa-vue/generate) (or fork) and clone locally:

```bash
git clone https://github.com/{your-repo-name}.git
cd {your-repo-name}
```

2️⃣ &nbsp; Restore all package dependencies:

```bash
npm i
```

3️⃣ &nbsp; Open it in VS Code:

```bash
code .
```

# Scripts
The following NPM scripts within `package.json` should be noted:

- `serve` - Launches Vite's dev server.
- `build` - Bundles code and copies artifacts for production from the `src` directory to the `dist` directory.
- `preview` - Launches a simple web server, serving the `dist` directory (Remember to `build` first! 🎗️).
- `test` - Launches the Playwright test runner & executes all tests within `tests` directory.
- `format` - Runs the Prettier formatter, applying format updates where necessary.
- `lint`- Runs the ESLint analyzer, applying code updates where necessary.


# Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test
# Runs the tests only on Chromium
npm run test -- --project=chromium
# Runs the tests of a specific file
npm run test -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test -- --debug
```

# Showcased Features
|     Feature    |  Availability | Description |
|-------------------------------|-----|-----------------------------------------------------------------|
|    Components                 | ✅  | [Omni Components](https://github.com/capitec/omni-components)   |
|    Component Intellisense     | ❌  | Not available                                                   |
|    Routing                    | ✅  | [Vue Router](https://router.vuejs.org/)                         |
|    VS Code Debugging          | ❌  | Not available                                                   |
|    Tests                      | ✅  | [Playwright](https://playwright.dev/)              |
|    Serve                      | ✅  | [Vite](https://vitejs.dev/)                        |
|    Build                      | ✅  | [Vite](https://vitejs.dev/)                        |
|    Build chunking             | ✅  | [vite.config.ts](./vite.config.ts)                                   |
|    Preview built output       | ✅  | [Vite](https://vitejs.dev/)                        |
|    Formatting                 | ✅  | [Prettier](https://prettier.io/)                   |
|    Linting                    | ✅  | [ESLint](https://eslint.org/)                      |

