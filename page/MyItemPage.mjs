import * as el from "../element/MyItem.mjs";
class MyItemPage {
  clickMyItem() {
    cy.get(el.btnMyItem).click();
  }
  clickWfl() {
    cy.get(el.textTitle).eq(0).click();
  }
  getTitle() {
    return cy.get(el.textTitle).eq(0).invoke("text");
  }
  getSCT() {
    return cy.get(el.input_primary).invoke("val");
  }
  getSTT() {
    return cy.get(el.input_stt).invoke("val");
  }
  submitWfl(data) {
    cy.get(el.input_start_date).click();
    cy.contains(
      ".v-date-picker-table.v-date-picker-table--date.theme--light tr td",
      28
    ).click();
    cy.get(el.input_text).type(data.name);
    cy.wait(3000);
    cy.get(el.button_submit).click();
    cy.wait(20000);
    cy.get(el.button_complete).eq(0).click();
    cy.contains(el.button_complete_success, "Hoàn thành").click();
    cy.get(el.btn_apply).click();
  }
  clickApproval() {
    // this.clickMyItem();
    // this.clickWfl();
    cy.get(el.btn_approval).click();
  }
  clickDisApproval() {
    // this.clickWfl();
    cy.get(el.btn_disapproval).click();
  }
  clickUPdate() {
    cy.get(el.btn_update).click();
  }
}
export default new MyItemPage();
