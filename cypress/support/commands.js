// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-localstorage-commands";

Cypress.Commands.add("isVisible", (selector) => {
  cy.get(selector).should("be.visible");
});
Cypress.Commands.add("isHidden", (selector) => {
  cy.get(selector).should("not.exist");
});
Cypress.Commands.add("login", () => {
  cy.request({
    met: "POST",
    url: "https://account.vthmgroup.vn/auth/login-v2",
    body: {
      email: "dinhnv@symper.vn",
      password: "Damthatbai@2010",
    },
  }).then((resp) => {
    window.localStorage.setItem("symper-login-info", {
      token:
        "eyJhbGciOiJSUzI1NiIsInR5cGUiOiJKV1QifQ==.eyJpZCI6IjIiLCJuYW1lIjoiTmd1eVx1MWVjNW4gVmlcdTFlYzd0IERpbmgiLCJlbWFpbCI6ImRpbmhudkBzeW1wZXIudm4iLCJ0ZW5hbnRJZCI6IjEiLCJ0eXBlIjoiYmEiLCJ1c2VyRGVsZWdhdGUiOnsiaWQiOiIxMjU2IiwiZmlyc3ROYW1lIjoiRGluaCIsImxhc3ROYW1lIjoiQkEgTmd1eVx1MWVjNW4gVmlcdTFlYzd0IiwidXNlck5hbWUiOiJkaW5obnZAc3ltcGVyLnZuIiwiZGlzcGxheU5hbWUiOiJCQSBOZ3V5XHUxZWM1biBWaVx1MWVjN3QgRGluaCIsImVtYWlsIjoiZGluaG52QHN5bXBlci52biIsInBob25lIjoiIiwic3RhdHVzIjoiMiIsImF2YXRhciI6IiIsInRlbmFudElkIjoiMSIsInR5cGUiOiJ1c2VyIiwiaXAiOiIxMTMuMjMuNTUuOTIiLCJ1c2VyQWdlbnQiOiJNb3ppbGxhXC81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXRcLzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZVwvMTAzLjAuMC4wIFNhZmFyaVwvNTM3LjM2IiwibG9jYXRpb24iOltdLCJyb2xlIjoiYXV0byJ9LCJ0ZW5hbnQiOnsiaWQiOiIxIn0sImlzX2Nsb3VkIjpmYWxzZSwidGVuYW50X2RvbWFpbiI6InZ0aG1ncm91cC52biJ9.NjUxMDk1YWJhMzA1NDEyOGU5OGE5YjE4YzliMTU0YWVkY2ZiMDhiZGYzOGZhYTFhZjZjNWU0MmEyOGU5ZDVhNWU4NDE1Mzk4NDBiZmI2YzM3Y2IzY2U1YzE1MzEzNGViNzBiYTQwODZkNWY0NjBlYTgyYTE2NTQzMzI2ZDAxNzliZDcwMWRkNzUzMjZmZGQ1MGM4YTY0ODI3Njc4YTg1NjM1ZDE1MWFlMGYzNmY2YmIwYWVlNTJmM2FmNTg4ZTg0NjcxOTgxNjk3OTE4MTMyZmVmNTQyODZmYTdlNmMyNmNlYTU0NGJlMmM5ZjAzYWE2YmM3MjNlYjk1N2M0YjEzNDI0NGRhMTQzNWFjZjA5NjkwYmVkNmExNTllMTdlZWJhYWI0NWJjY2VlZTNkZjQ5NzYyZjUyOWYwMDZlYmEyZTVlNTFmNDI5ZjExYjU5YzJiZWYyMWYwZTE4M2VkZmFiNzFmYzBiMGM3NjA0ZWNlYTUwMjE4YzJkZGJkZjJhM2M2NWFkM2I1MDk2MDdhOWFjMTk5YTAzZDdjNjA5MGYwYWUzNjhkMTQzMmM4ZTQzMmNmZDczZTBlMWZlZDY2MzA0NjU5MWI2MjU0ZDJkOWE0ODgwMzg0MzM1YmUzNzkxOWIzOTQ4NjJiYmZlMDllMjNjNzhjY2EwMTU1NzU0NzY3ZmI=",
      baId: "2",
      endUserId: "1256",
      profile: {
        id: "2",
        name: "Nguyễn Việt Dinh",
        email: "dinhnv@symper.vn",
        tenantId: "1",
        type: "ba",
        userDelegate: {
          id: "1256",
          firstName: "Dinh",
          lastName: "BA Nguyễn Việt",
          userName: "dinhnv@symper.vn",
          displayName: "BA Nguyễn Việt Dinh",
          email: "dinhnv@symper.vn",
          phone: "",
          status: "2",
          avatar: "",
          tenantId: "1",
          type: "user",
          ip: "113.23.55.92",
          userAgent:
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
          location: [],
          role: "auto",
        },
        tenant: { id: "1" },
        is_cloud: false,
        tenant_domain: "vthmgroup.vn",
      },
    });
  });
});
Cypress.Commands.add("loginViaAPISession", (uname, pwd) => {
  cy.request({
    method: "POST",
    url: "https://account.vthmgroup.vn/auth/login-v2",
    body: {
      username: uname,
      password: pwd,
    },
  }).then((res) => {
    expect(res.status).to.eq(200);
    window.localStorage.setItem(
      "symper-login-info",
      JSON.stringify({
        token:
          "eyJhbGciOiJSUzI1NiIsInR5cGUiOiJKV1QifQ==.eyJpZCI6IjIiLCJuYW1lIjoiTmd1eVx1MWVjNW4gVmlcdTFlYzd0IERpbmgiLCJlbWFpbCI6ImRpbmhudkBzeW1wZXIudm4iLCJ0ZW5hbnRJZCI6IjEiLCJ0eXBlIjoiYmEiLCJ1c2VyRGVsZWdhdGUiOnsiaWQiOiIxMjU2IiwiZmlyc3ROYW1lIjoiRGluaCIsImxhc3ROYW1lIjoiQkEgTmd1eVx1MWVjNW4gVmlcdTFlYzd0IiwidXNlck5hbWUiOiJkaW5obnZAc3ltcGVyLnZuIiwiZGlzcGxheU5hbWUiOiJCQSBOZ3V5XHUxZWM1biBWaVx1MWVjN3QgRGluaCIsImVtYWlsIjoiZGluaG52QHN5bXBlci52biIsInBob25lIjoiIiwic3RhdHVzIjoiMiIsImF2YXRhciI6IiIsInRlbmFudElkIjoiMSIsInR5cGUiOiJ1c2VyIiwiaXAiOiIxMTMuMjMuNTUuOTIiLCJ1c2VyQWdlbnQiOiJNb3ppbGxhXC81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXRcLzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZVwvMTAzLjAuMC4wIFNhZmFyaVwvNTM3LjM2IiwibG9jYXRpb24iOltdLCJyb2xlIjoiYXV0byJ9LCJ0ZW5hbnQiOnsiaWQiOiIxIn0sImlzX2Nsb3VkIjpmYWxzZSwidGVuYW50X2RvbWFpbiI6InZ0aG1ncm91cC52biJ9.NjUxMDk1YWJhMzA1NDEyOGU5OGE5YjE4YzliMTU0YWVkY2ZiMDhiZGYzOGZhYTFhZjZjNWU0MmEyOGU5ZDVhNWU4NDE1Mzk4NDBiZmI2YzM3Y2IzY2U1YzE1MzEzNGViNzBiYTQwODZkNWY0NjBlYTgyYTE2NTQzMzI2ZDAxNzliZDcwMWRkNzUzMjZmZGQ1MGM4YTY0ODI3Njc4YTg1NjM1ZDE1MWFlMGYzNmY2YmIwYWVlNTJmM2FmNTg4ZTg0NjcxOTgxNjk3OTE4MTMyZmVmNTQyODZmYTdlNmMyNmNlYTU0NGJlMmM5ZjAzYWE2YmM3MjNlYjk1N2M0YjEzNDI0NGRhMTQzNWFjZjA5NjkwYmVkNmExNTllMTdlZWJhYWI0NWJjY2VlZTNkZjQ5NzYyZjUyOWYwMDZlYmEyZTVlNTFmNDI5ZjExYjU5YzJiZWYyMWYwZTE4M2VkZmFiNzFmYzBiMGM3NjA0ZWNlYTUwMjE4YzJkZGJkZjJhM2M2NWFkM2I1MDk2MDdhOWFjMTk5YTAzZDdjNjA5MGYwYWUzNjhkMTQzMmM4ZTQzMmNmZDczZTBlMWZlZDY2MzA0NjU5MWI2MjU0ZDJkOWE0ODgwMzg0MzM1YmUzNzkxOWIzOTQ4NjJiYmZlMDllMjNjNzhjY2EwMTU1NzU0NzY3ZmI=",
        baId: "2",
        endUserId: "1256",
        profile: {
          id: "2",
          name: "Nguyễn Việt Dinh",
          email: "dinhnv@symper.vn",
          tenantId: "1",
          type: "ba",
          userDelegate: {
            id: "1256",
            firstName: "Dinh",
            lastName: "BA Nguyễn Việt",
            userName: "dinhnv@symper.vn",
            displayName: "BA Nguyễn Việt Dinh",
            email: "dinhnv@symper.vn",
            phone: "",
            status: "2",
            avatar: "",
            tenantId: "1",
            type: "user",
            ip: "113.23.55.92",
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36",
            location: [],
            role: "auto",
          },
          tenant: { id: "1" },
          is_cloud: false,
          tenant_domain: "vthmgroup.vn",
        },
      })
    );
  });
});
