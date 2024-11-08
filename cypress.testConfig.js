const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    env: {
      BASE_URL: "https://www.saucedemo.com/",
      USERS_NAME: "problem_user",
      USER_PASSWORD: "secret_sauce",
    },

    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,

    },

    setupNodeEvents(on, config) {
      
    },
  },
});

