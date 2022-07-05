import * as el from "../element/Login.js";
import * as data_login from "../helper/data_login.js";
class LoginPage {
  visit() {
    cy.visit(data_login.URL);
  }
  submit(fillEmail, password) {
    cy.get(el.txtEmail).type(fillEmail);
    cy.get(el.txtPassword).type(`${password}{enter}`);
    cy.isVisible(".v-dialog.v-dialog--active.v-dialog--persistent");
    cy.get(".v-btn.v-btn--contained.theme--light.v-size--small").click();
  }
  validate(fillEmail, password) {
    cy.get(el.txtEmail).type(fillEmail);
    cy.get(el.txtPassword).type(password);
  }
  // get dataText() {
  //   return cy.get(el.messages);
  // }
  // gettitleListText(data) {
  //   let a = cy.get(data).then(($cells) => Cypress._.map($cells, "textContent"));
  //   return a;
  // }
}
export default new LoginPage();
