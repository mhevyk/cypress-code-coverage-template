const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: false,
  viewportHeight: 400,
  viewportWidth: 400,
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "https://www.webdriveruniversity.com/",
    env: {
      codeCoverage: {
        exclude: ["cypress/**/*.*"],
      },
    },
  },
});
