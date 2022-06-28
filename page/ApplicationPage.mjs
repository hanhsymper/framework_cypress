import * as el from "../element/Application.mjs";
class ApplicationPage {
  clickMyApp() {
    cy.get(el.btnApplication).click({ force: true });
  }
  openSilder() {
    cy.get(el.openSilder).click();
  }
  openTooltip() {
    cy.get(el.tolltipRole).click();
  }
  changeRole() {
    cy.get(el.selectRole).contains(el.nameRole).click();
  }
}
export default new ApplicationPage();
