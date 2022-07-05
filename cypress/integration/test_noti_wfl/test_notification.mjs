const { expect } = require("chai");
// const cypress = require("cypress");
const { describe } = require("mocha");
const LoginPage = require("../../../page/LoginPage.js");
const WorkflowPage = require("../../../page/WorkflowPage.mjs");
const data = require("../../fixtures/data_test_noti_wfl/data_id.js");

import * as data_login from "../../../helper/data_login";

export const testNotificationWfl = function (data) {
  describe("test notification when update", function () {
    before(() => {
      LoginPage.visit();
      LoginPage.submit(data_login.EMAIL, data_login.PASSWORD);
    });
    it("check display notificatio when update", function () {
      WorkflowPage.clickWfL();
      WorkflowPage.search(data);
      WorkflowPage.clickAction("Sửa");
      cy.wait(20000);
      WorkflowPage.clickActionSave();
      WorkflowPage.checkNotification("Update model sucessfully");
    });
    it("check display notificatio when deploy", function () {
      WorkflowPage.clickWfL();
      LoginPage.submit(data_login.EMAIL, data_login.PASSWORD);
      WorkflowPage.clickWfL();
      WorkflowPage.search(data);
      WorkflowPage.clickAction("Deploy");
      WorkflowPage.checkNotification("Deploy process successfully");
    });
  });
  // describe("test notification when deploy", function () {
  //   before(() => {
  //     LoginPage.visit();
  //     LoginPage.submit(data_login.EMAIL, data_login.PASSWORD);
  //     WorkflowPage.clickWfL();
  //   });
  //   // it("check display notificatio when update", function () {
  //   //   WorkflowPage.clickWfL();
  //   //   WorkflowPage.search(data);
  //   //   WorkflowPage.clickAction("Sửa");
  //   //   cy.wait(20000);
  //   //   WorkflowPage.clickActionSave();
  //   //   WorkflowPage.checkNotification("Update model sucessfully");
  //   //   cy.go("back");
  //   // });
  //   it("check display notificatio when deploy", function () {
  //     WorkflowPage.search(data);
  //     WorkflowPage.clickAction("Deploy");
  //     WorkflowPage.checkNotification("Deploy process successfully");
  //   });
  // });
};
for (let i = 0; i < data.length; i++) {
  testNotificationWfl(data[i]);
}
