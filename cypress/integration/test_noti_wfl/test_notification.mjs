const { expect } = require("chai");
// const cypress = require("cypress");
const { describe, beforeEach } = require("mocha");
const LoginPage = require("../../../page/LoginPage.js");
const WorkflowPage = require("../../../page/WorkflowPage.mjs");
const data = require("../../fixtures/data_test_noti_wfl/data_id.js");

import * as data_login from "../../../helper/data_login";

export const testNotificationWfl = function (data) {
  describe("test notification when update", function () {
    // before(() => {
    //   cy.loginViaAPISession("dinhnv@symper.vn", "Damthatbai@2010");
    //   // LoginPage.submit(data_login.EMAIL, data_login.PASSWORD);
    // });
    beforeEach(() => {
      cy.loginViaAPISession("dinhnv@symper.vn", "Damthatbai@2010");
    });
    it(`check display notificatio when update ${data}`, function () {
      cy.visit("https://symper-apps.vthmgroup.vn/#/workflow/" + data + "/edit");

      // WorkflowPage.clickWfL();
      // WorkflowPage.search(data);
      // WorkflowPage.clickAction("Sửa");
      cy.wait(20000);
      WorkflowPage.clickActionSave();
      WorkflowPage.checkNotification("Update model sucessfully");
    });
    it(`check display notificatio when deploy ${data}`, function () {
      // WorkflowPage.clickWfL();
      // LoginPage.submit(data_login.EMAIL, data_login.PASSWORD);
      // WorkflowPage.clickWfL();
      // WorkflowPage.search(data);
      cy.visit("https://symper-apps.vthmgroup.vn/#/workflow");
      WorkflowPage.findId(data);
      WorkflowPage.clickAction("Deploy");
      WorkflowPage.checkNotification("Deploy process successfully");
    });
    // after(() => {
    //   cy.clearLocalStorage("symper-login-info");
    // });
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
