export const gettitleListText = (data) => {
  let a = cy.get(data).then(($cells) => Cypress._.map($cells, "textContent"));
  return a;
};
