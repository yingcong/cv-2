(() => {
  "use strict";

  const parameters = new URLSearchParams(window.location.hash.slice(1));
  const invitationToken = parameters.get("invite") || "";
  const cleanUrl = `${window.location.pathname}${window.location.search}`;
  window.history.replaceState(null, "", cleanUrl);

  if (!/^[A-Za-z0-9_-]{32,128}$/.test(invitationToken)) {
    return;
  }

  const registration = document.getElementById("registration");
  const publicStatus = document.getElementById("public-invitation-status");
  const callToAction = document.getElementById("invitation-cta");
  const form = document.getElementById("registration-form");
  const formStatus = document.getElementById("form-status");

  registration.hidden = false;
  publicStatus.textContent = "Invitation received. Registration is available below.";
  callToAction.textContent = "Register your email";
  callToAction.href = "#registration";
  callToAction.classList.remove("is-locked");

  const singleLine = (value, limit) =>
    value.trim().replace(/\s+/g, " ").slice(0, limit);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) {
      return;
    }

    const email = singleLine(document.getElementById("email").value, 254).toLowerCase();
    const name = singleLine(document.getElementById("name").value, 100);
    const affiliation = singleLine(
      document.getElementById("affiliation").value,
      160,
    );
    const body = [
      "ENVISION PAPER AUDIT REGISTRATION",
      "Version: 1",
      `Invite: ${invitationToken}`,
      `Email: ${email}`,
      `Name: ${name}`,
      `Affiliation: ${affiliation}`,
    ].join("\r\n");
    const mailto =
      "mailto:envision.research.paper@gmail.com" +
      `?subject=${encodeURIComponent("[Envision Paper Audit] Registration")}` +
      `&body=${encodeURIComponent(body)}`;

    formStatus.textContent =
      "Your registration email is ready. Send it from the address you entered.";
    window.location.assign(mailto);
  });
})();
