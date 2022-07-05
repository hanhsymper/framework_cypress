import { expect } from "chai";
import { title } from "../cypress/fixtures/data_test_wfl/data_test_notification.mjs";

export const gettitleListText = (data) => {
  let a = cy.get(data).then(($cells) => Cypress._.map($cells, "textContent"));
  return a;
};
// export const checkTitle = (data, title, i) => {
//   cy.get(data).then(($cells) => {
//     expect($cells.get(i).innerText).to.deep.equal(title);
//   });
export const checkTitle = (data, title, i) => {
  cy.get(data)
    .eq(i)
    .invoke("text")
    .then(cy.log)
    .then((text) => {
      return text.trim();
    })
    .should("equal", title);
};
export const checkDataDetail = (data, title) => {
  cy.get(data)
    .invoke("text")
    .then(cy.log)
    .then((text) => {
      return text.trim();
    })
    .should("equal", title);
};
