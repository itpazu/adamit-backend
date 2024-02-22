"use strict";

const { join } = require("path");

module.exports = ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      apolloServer: {
        tracing: false,
      },
      "import-export-entries": {
        enabled: true,
      },
    },
  },
});
