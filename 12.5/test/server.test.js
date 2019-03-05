"use strict";

const { test } = require("tap");
const server = require("../");

test("has a route", async t => {
  const response = await server.inject({ method: "GET", url: "/" });
  t.deepEqual(JSON.parse(response.body), { result: "no input" });
});
