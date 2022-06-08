const { expect } = require("chai");
// const cypress = require("cypress");
const { describe } = require("mocha");
const LoginPage = require("../PageObject/LoginPage");
let sosanh = (a, b) => parseInt(a) - parseInt(b);

describe("my test", function () {
  let a;
  let d = [];
  let sorted;
  before(() => {
    LoginPage.visit();
    LoginPage.submit("hanhdth@symper.vn", "Symper@123BA");
    // LoginPage.wait(10000);
    // LoginPage.waitUltilLoginSuccess();
    LoginPage.getdataShowList();
    // LoginPage.wait(10000);
  });
  it("check sorf", function () {
    cy.get(
      "[aria-colindex='2'][col-id='id'] .fs-13.symper-table-dropdown-button.mdi.mdi-filter-variant.symper-filter-button"
    ).click();
    cy.get(".pb-1.dropdown-item.grey-hover")
      .contains("Sắp xếp giảm dần")
      .click();
    cy.get("[aria-colindex='2'][col-id='id']")
      .then(($cells) => Cypress._.map($cells, "textContent"))
      .then((string) => Cypress._.map(string, parseFloat))
      .then((numbers) => {
        sorted = Cypress._.orderBy(numbers, "DESC");
        expect(numbers).to.deep.equal(sorted);
      });
  });
  it("check filter", function () {
    let a = cy
      .get("[aria-colindex='2'][col-id='id']")
      .then(($cells) => Cypress._.map($cells, "textContent"));
    cy.get(
      "[aria-colindex='2'][col-id='id'] .fs-13.symper-table-dropdown-button.mdi.mdi-filter-variant.symper-filter-button"
    ).click();

    cy.get(".w-100.v-btn.v-btn--depressed.theme--light.v-size--small")
      .eq(0)
      .click();
    cy.get(".v-list-item--link.v-list-item.v-list-item--link.theme--light")
      .contains("Bằng")
      .click();
    cy.get(
      ".v-input.sym-small-size.mt-2.v-input--dense.theme--light.v-text-field.v-text-field--single-line.v-text-field--is-booted.v-text-field--enclosed.v-text-field--outlined .v-text-field__slot input"
    )
      .eq(0)
      .type("3763");
    cy.get(".pt-1.dropdown-item button .v-btn__content")
      .contains("Áp dụng")
      .click();

    cy.get("[aria-colindex='2'][col-id='id']")
      .then(($cells) => Cypress._.map($cells, "textContent"))
      .then((string) => Cypress._.map(string, parseFloat))
      .then((numbers) => {
        cy.log(numbers);
        Cypress._.map(numbers, (s) => {
          expect(sorted).to.deep.include(s);
        });
      });
  });
});
