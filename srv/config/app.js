// Global config
// =============
// One place for all your config needs.
// Import anywhere and share configs everywhere.

module.exports = {
  //Development config
  development: {
    // Select port to run server on
    port: 3000,

    // CORS config
    cors: {
      origin: function(origin, callback) {
        if (['http://localhost:8080', 'http://localhost:3000'].indexOf(origin) !== -1 || !origin) { // Allow CORS and REST tools like Postman in dev mode
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'), origin);
        }
      },
      optionsSuccessStatus: 204 // 204 is usually the default
    },
  },
  staging: {
    // Not everyone runs a staging environment so leaving this blank
  },
  production: {
    // Select port to run server on
    port: 9001,

    // CORS config
    cors: {
      origin: function(origin, callback) {
        if ([process.env.CORS_ORIGIN].indexOf(origin) !== -1 || !origin) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'), origin);
        }
      },
      optionsSuccessStatus: 204 // 204 is usually the default
    },
  }
};
