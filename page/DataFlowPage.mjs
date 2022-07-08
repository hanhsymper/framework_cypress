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
  findNodeName(i) {
    return cy
      .get(`.w-100.fs-13 tr[name=${i}] .v-text-field__slot input`)
      .eq(0)
      .invoke("val");
  }
  clickOpenIconFormular(i) {
    cy.get(
      `.w-100.fs-13 tr[name=${i}] .v-expansion-panel.sym-expand-panel .v-expansion-panel-header__icon`
    ).click();
  }
  checkSaveSuceess(title) {
    cy.isVisible(".vue-notification-wrapper");
    cy.get(".vue-notification-wrapper").should("contain.text", title);
  }
  // clickCloseIconFormular() {

  // }
  getFormular(i) {
    cy.get(
      `.w-100.fs-13 tr[name=${i}] .v-expansion-panel.sym-expand-panel .v-expansion-panel-content.sym-v-expand-content.py-1`
    ).type(`{selectall}{backspace}{selectall}{backspace}`);
  }
  setFormular(i, data) {
    cy.get(
      `.w-100.fs-13 tr[name=${i}] .v-expansion-panel.sym-expand-panel .v-expansion-panel-content.sym-v-expand-content.py-1`
    ).type(`${data}`);
  }

  clickSave() {
    cy.is(
      ".mr-2.v-btn.v-btn--depressed.theme--light.v-size--small.primary"
    ).click();
  }
  // patseFomular(name, data) {
  //   let data1 = cy.get(".w-100.fs-13>tr");
  //   data1.then(($count) => {
  //     // cy.log($count);
  //     for (let i = 0; i < $count.length; i++) {
  //       cy.log(i);
  //       this.findNodeName(i).then(($a) => {
  //         if ($a == name) {
  //           // cy.log("OK");
  //           this.clickOpenIconFormular(i);
  //           this.getFormular(i);
  //           this.setFormular(i, data);
  //           // cy.get(
  //           //   `.w-100.fs-13 tr[name=${i}] .v-expansion-panel.sym-expand-panel .v-expansion-panel-content.sym-v-expand-content.py-1`
  //           // ).type(`${data}`);
  //         }
  //       });
  //     }
  //   });
  // }

  patseFomular(data) {
    let data1 = cy.get(".w-100.fs-13>tr");
    data1.then(($count) => {
      for (let i = 0; i < $count.length; i++) {
        this.findNodeName(i).then(($a) => {
          for (let j = 0; j < Object.keys(data).length; j++) {
            let formular = data[Object.keys(data)[j]];
            if ($a == Object.keys(data)[j]) {
              this.clickOpenIconFormular(i);
              this.getFormular(i);
              this.setFormular(i, formular.formula_after);
            }
          }
        });
      }
    });
  }
  // cy.log($count.length);
  //     });
  // //
}
// if (this.findNodeName(). == name) cy.log("OK");
// cy.get(".v-expansion-panel-header__icon").click();

export default new DataFlowPage();
// vue-notification-wrapper.vn-fade-enter-active.vn-fade-enter-to>
