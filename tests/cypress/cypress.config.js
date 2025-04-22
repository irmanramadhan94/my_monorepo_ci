const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cy99br',
  e2e: {
    baseUrl: 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app',
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    // experimentalSessionAndOrigin: true, // sejak cypress 12.0.0 sudah dihapus
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
 
});
