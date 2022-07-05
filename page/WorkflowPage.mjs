import * as el from "../element/Workflow.mjs";
import { checkDataDetail } from "../helper/get_text.js";
class WorkflowPage {
  // findId(id) {
  //   cy.get(
  //     "[aria-colindex='2'][col-id='id'] .fs-13.symper-table-dropdown-button.mdi.mdi-filter-variant.symper-filter-button"
  //   ).click();
  //   cy.get(".w-100.v-btn.v-btn--depressed.theme--light.v-size--small")
  //     .eq(0)
  //     .click();
  //   // cy.get(".v-menu__content.theme--light.v-menu__content--fixed").should(
  //   //   "have.class",
  //   //   "menuable__content__active"
  //   // );

  //   cy.get(
  //     ".menuable__content__active .v-list-item--link.v-list-item.v-list-item--link.theme--light"
  //   )
  //     .contains("Bằng")
  //     .click();

  //   cy.get(
  //     ".v-input.sym-small-size.mt-2.v-input--dense.theme--light.v-text-field.v-text-field--single-line.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined .v-text-field__slot input"
  //   )
  //     .eq(0)
  //     .type(id);
  //   cy.get(".pt-1.dropdown-item button .v-btn__content")
  //     .contains("Áp dụng")
  //     .click();
  // }
  search(id) {
    cy.get(
      ".v-input.d-inline-block.mr-2.sym-small-size.v-input--dense.theme--light.v-text-field.v-text-field--single-line.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-text-field--placeholder .v-text-field__slot input"
    ).type(`${id}{enter}`, { force: true });
    cy.get(
      ".v-input.d-inline-block.mr-2.sym-small-size.v-input--dense.theme--light.v-text-field.v-text-field--single-line.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined.v-text-field--placeholder .v-text-field__slot input"
    ).clear();
  }
  clickWfL() {
    cy.get(el.btn_wfl).click({ force: true });
    cy.contains(el.btn_list_wfl, " Danh sách quy trình ").click({
      force: true,
    });
  }
  clickAction(data) {
    cy.get(".ag-center-cols-container").rightclick();
    cy.isVisible(".ag-menu.ag-ltr.ag-popup-child");
    cy.get(
      ".ag-menu-option.redFont.bold .ag-menu-option-part.ag-menu-option-text"
    )
      .contains(data)
      .click();
  }
  clickActionSave() {
    cy.isVisible(
      ".float-right.mr-1.v-btn.v-btn--depressed.theme--light.v-size--small.primary"
    );
    cy.get(
      ".float-right.mr-1.v-btn.v-btn--depressed.theme--light.v-size--small.primary"
    ).click();
  }
  checkNotification(title) {
    cy.isVisible(".vue-notification-wrapper");
    cy.get(".vue-notification-wrapper").should("contain.text", title);
  }
}
export default new WorkflowPage();
