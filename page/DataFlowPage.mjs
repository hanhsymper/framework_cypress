import * as el from "../element/Dataflow";
import { checkDataDetail } from "../helper/get_text.js";
class DataFlowPage {
  clickWfL() {
    cy.get(el.btn_dataflow).click();
    cy.contains(el.btn_list_dataflow, " Danh sách dataflow ").click();
  }
  findId(id) {
    cy.get(
      "[aria-colindex='2'][col-id='id'] .fs-13.symper-table-dropdown-button.mdi.mdi-filter-variant.symper-filter-button"
    ).click();
    cy.get(".w-100.v-btn.v-btn--depressed.theme--light.v-size--small")
      .eq(0)
      .click();
    cy.get(".v-menu__content.theme--light.v-menu__content--fixed").should(
      "have.class",
      "menuable__content__active"
    );
    cy.get(
      ".menuable__content__active .v-list-item--link.v-list-item.v-list-item--link.theme--light"
    )
      .contains("Bằng")
      .click();
    cy.get(
      ".v-input.sym-small-size.mt-2.v-input--dense.theme--light.v-text-field.v-text-field--single-line.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined .v-text-field__slot input"
    )
      .eq(0)
      .type(id);
    cy.get(".pt-1.dropdown-item button .v-btn__content")
      .contains("Áp dụng")
      .click();
  }
  clickAction(data) {
    cy.get(".ag-center-cols-container").rightclick();
    cy.isVisible(".ag-menu.ag-ltr.ag-popup-child");
    cy.get(
      ".ag-menu-option.redFont.bold .ag-menu-option-part.ag-menu-option-text"
    )
      .contains(data)
      .click();
    cy.isVisible(
      ".mr-2.v-btn.v-btn--depressed.v-btn--flat.v-btn--text.theme--light.v-size--small"
    );
  }
  clickNode(data) {
    cy.isVisible(data);
    cy.get(data).click();
  }
  clickRun() {
    cy.get(
      ".mr-2.v-btn.v-btn--depressed.v-btn--flat.v-btn--text.theme--light.v-size--small"
    )
      .contains(" Chạy ")
      .click();
  }
  checkDisPlay(title) {
    //   cy.get(
    //     ".vue-notification-wrapper.vn-fade-enter-active.vn-fade-enter-to"
    //   ).should("not.exist")
    // cy.isVisible(".vue-notification-wrapper");
    // cy.get(".vue-notification-wrapper").should("contain.text", title);
    // if (cy.get(".vue-notification-wrapper").wait(2000).length > 0) {
    //   cy.get(".vue-notification-wrapper").should("contain.text", title);
    // } else {
    //   cy.get(
    //     ".vue-notification-wrapper.vn-fade-enter-active.vn-fade-enter-to"
    //   ).should("not.exist");
    // }
    cy.get(".vue-notification-group")
      .wait(2500)
      .should("have.css", "height", "0px");

    // cy.isVisible(".vue-notification-wrapper");
    // cy.get(".vue-notification-wrapper").wait(2000).should("not.exist");
    // if()
    // cy.get(".vue-notification-wrapper").should(($lis) => {
    //   cy.wait(1000);
    //   expect($lis).to.have.length(0);
    // });
    //   } else {
    //   }
  }
}
export default new DataFlowPage();
// vue-notification-wrapper.vn-fade-enter-active.vn-fade-enter-to>
