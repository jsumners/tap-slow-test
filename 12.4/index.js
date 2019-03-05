"use strict";

const fastify = require("fastify")();

fastify.route(require("./lib/handlers/slash"));

if (require.main === module) {
  fastify.listen(5000, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
} else {
  module.exports = fastify;
}
