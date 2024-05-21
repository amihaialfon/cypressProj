const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://stephenchou1017.github.io/scheduler', // Set base URL for convenience
    supportFile: 'cypress/support/e2e.js', // Specify the support file
  },
});
