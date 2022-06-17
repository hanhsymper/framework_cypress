const { expect } = require("chai");
// const cypress = require("cypress");
const { describe } = require("mocha");
const LoginPage = require("../../../page/LoginPage.js");
const DATA_TEST = require("../../fixtures/data_test_login");
import * as el from "../../../element/Login";
const { gettitleListText } = require("../../../helper/get_text.js");

export const testLogin = function (data) {
  describe("test login symper", function () {
    before(() => {
      LoginPage.visit();
    });
    it(`${data.title}`, function () {
      if (data.expect == "check_cuccess") {
        LoginPage.submit(data.email, data.password);
        cy.url().should("include", "/");
      } else if (data.expect == "check_validate") {
        LoginPage.validate(data.email, data.password);

        gettitleListText(el.messages).then((data1) => {
          cy.get(data1);
          expect(data.messages).to.deep.equal(data1);
        });
      } else {
        LoginPage.submit(data.email, data.password);
        gettitleListText(el.notification).then((data1) => {
          expect(data.messages).to.deep.equal(data1);
        });
      }
    });
  });
};
for (let i = 0; i < DATA_TEST.length; i++) {
  testLogin(DATA_TEST[i]);
}
