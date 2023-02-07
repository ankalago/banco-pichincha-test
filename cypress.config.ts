import { defineConfig } from "cypress";

export default defineConfig({
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  videoCompression: 32,
  component: {
    viewportWidth: 1280,
    viewportHeight: 720,
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    excludeSpecPattern: [
      "**/1-getting-started/*.js",
      "**/2-advanced-examples/*.js"
    ],
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
