"use strict";

const { test } = require("tap");
const route = require("../../../lib/handlers/slash");

test("detects missing header", async t => {
  const res = {
    send(body) {
      t.deepEqual(body, { result: "no input" });
    }
  };
  route.handler({ headers: {} }, res);
});

test("detects present header", async t => {
  const res = {
    send(body) {
      t.deepEqual(body, { result: "foo" });
    }
  };
  route.handler({ headers: { "x-foo": "foo" } }, res);
});
