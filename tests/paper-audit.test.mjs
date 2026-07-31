import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";

const source = readFileSync(
  new URL("../static/paper-audit/app.js", import.meta.url),
  "utf8",
);
const page = readFileSync(
  new URL("../static/paper-audit/index.html", import.meta.url),
  "utf8",
);

function fixture(hash) {
  const elements = {
    registration: { hidden: true },
    "public-invitation-status": { textContent: "Access is currently by invitation." },
    "invitation-cta": {
      textContent: "Invitation only",
      href: "#invitation",
      classList: { remove(name) { this.removed = name; } },
    },
    "registration-form": {
      reportValidity: () => true,
      addEventListener(_name, handler) { this.handler = handler; },
    },
    "form-status": { textContent: "" },
    email: { value: " Researcher@Example.EDU " },
    name: { value: "<b>Ada</b>\nLovelace" },
    affiliation: { value: "Example   University" },
  };
  const state = { replaced: null, assigned: null };
  const context = {
    URLSearchParams,
    window: {
      location: {
        hash,
        pathname: "/paper-audit/",
        search: "",
        assign(value) { state.assigned = value; },
      },
      history: {
        replaceState(_state, _title, value) { state.replaced = value; },
      },
    },
    document: {
      getElementById(id) { return elements[id]; },
    },
  };
  vm.runInNewContext(source, context);
  return { elements, state };
}

test("public visitors never receive registration controls", () => {
  const { elements, state } = fixture("");
  assert.equal(state.replaced, "/paper-audit/");
  assert.equal(elements.registration.hidden, true);
  assert.equal(elements["registration-form"].handler, undefined);
});

test("an invitation is removed from the address bar and enables registration", () => {
  const token = "A".repeat(43);
  const { elements, state } = fixture(`#invite=${token}`);
  assert.equal(state.replaced, "/paper-audit/");
  assert.equal(elements.registration.hidden, false);
  assert.equal(elements["invitation-cta"].textContent, "Register your email");

  elements["registration-form"].handler({ preventDefault() {} });
  const messageUrl = new URL(state.assigned);
  assert.equal(messageUrl.protocol, "mailto:");
  assert.equal(
    messageUrl.searchParams.get("subject"),
    "[Envision Paper Audit] Registration",
  );
  const body = messageUrl.searchParams.get("body");
  assert.match(body, new RegExp(`Invite: ${token}`));
  assert.match(body, /Email: researcher@example\.edu/);
  assert.match(body, /Name: <b>Ada<\/b> Lovelace/);
  assert.doesNotMatch(body, /\nLovelace/);
});

test("malformed invitation fragments remain public-only", () => {
  const { elements } = fixture("#invite=%3Cscript%3Ealert(1)%3C/script%3E");
  assert.equal(elements.registration.hidden, true);
  assert.equal(elements["public-invitation-status"].textContent, "Access is currently by invitation.");
});

test("the page explains the email-only submission and delivery flow", () => {
  assert.match(page, /The whole exchange happens in your inbox\./);
  assert.match(page, /Start a new email thread with one manuscript PDF or one public paper link\./);
  assert.match(page, /delivered back to your inbox\./);
});
