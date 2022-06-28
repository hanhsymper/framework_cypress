// import cypress from "cypress";

const { expect } = require("chai");
// const cypress = require("cypress");
const { describe } = require("mocha");
const ApplicationPage = require("../../../page/ApplicationPage.mjs");

const LoginPage = require("../../../page/LoginPage.js");

// import * as el from "../../../element/Login";
const data = require("../../fixtures/data_test_wfl/data_test_login_user.mjs");
export const testLogin = function () {
  describe("test login symper", function () {
    before(() => {
      LoginPage.visit();
    });
    it(`${data.title}`, function () {
      LoginPage.submit(data.email, data.password);
      ApplicationPage.openSilder();
      ApplicationPage.openTooltip();
      ApplicationPage.changeRole();
      ApplicationPage.clickMyApp();
    });
  });
};
testLogin();
