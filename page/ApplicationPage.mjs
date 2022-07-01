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
  openDetailApp() {
    cy.get(el.openDetailApp).click();
  }
  selectWFL() {
    // cy.get(el.selectWFL).contains(el.nameWFL).rightclick();
    cy.contains(el.selectWFL, el.nameWFL).rightclick();
  }
  selectDoc() {
    cy.contains(el.selectWFL, "hanh test").click();
  }
  selectActionWFL() {
    cy.get(el.selectActionWFL).contains(el.nameActionWFL).click();
  }
  startWFL() {
    this.openSilder();
    this.openTooltip();
    this.changeRole();
    this.clickMyApp();
    this.openDetailApp();
    this.selectWFL();
    this.selectActionWFL();
  }
  checkDataAfterSubmit(sct) {
    this.clickMyApp();
    this.openDetailApp();
    this.selectDoc();

    cy.get(
      "[aria-colindex='3'][col-id='id'] .fs-13.symper-table-dropdown-button.mdi.mdi-filter-variant.symper-filter-button"
    ).click();
    cy.get(".w-100.v-btn.v-btn--depressed.theme--light.v-size--small")
      .eq(0)
      .click();
    cy.get(".v-menu__content.theme--light.v-menu__content--fixed").should(
      "have.class",
      "menuable__content__active"
    );
    cy.wait(2000);
    cy.get(".v-list-item--link.v-list-item.v-list-item--link.theme--light")
      .contains("Bằng")
      .click();
    cy.get(
      ".v-input.sym-small-size.mt-2.v-input--dense.theme--light.v-text-field.v-text-field--single-line.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined .v-text-field__slot > input"
    )
      .eq(0)
      .type(sct);
    cy.get(".pt-1.dropdown-item button .v-btn__content")
      .contains("Áp dụng")
      .click();
    cy.get(".ag-center-cols-container").should("have.css", "height", "21px");
  }
  clickLogout() {
    cy.get(el.btn_icon_opensidebar).click();
    cy.get(el.icon_config).click();
    cy.contains(el.btn_logout, el.name_logout).click();
  }
}
export default new ApplicationPage();
