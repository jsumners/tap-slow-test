"use strict";

module.exports = {
  method: "GET",
  path: "/",
  handler(req, res) {
    const result = req.headers["x-foo"] ? req.headers["x-foo"] : "no input";
    res.send({ result });
  }
};
