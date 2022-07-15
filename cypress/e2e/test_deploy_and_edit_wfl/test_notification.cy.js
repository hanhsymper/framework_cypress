const { expect } = require("chai");
// const cypress = require("cypress");
const { describe, beforeEach } = require("mocha");
const LoginPage = require("../../../page/LoginPage.js");
const WorkflowPage = require("../../../page/WorkflowPage.mjs");
const data = require("../../fixtures/data_test_noti_wfl/data_id.js");

const { handleErrow } = require("../../../helper/handle_ram_overflow_error");

export const testNotificationWfl = function (data) {
  describe("test notification when update", function () {
    before(() => {
      cy.loginViaAPISession("dinhnv@symper.vn", "Damthatbai@2010");
      cy.visit("https://stage-apps.symper.vn/#/workflow/");
      WorkflowPage.clickWfL();
    });

    for (let i = 0; i < data.length; i++) {
      beforeEach(() => {
        cy.loginViaAPISession("dinhnv@symper.vn", "Damthatbai@2010");
      });
      it(`check display notificatio when update ${data[i]}`, function () {
        WorkflowPage.search(data[i]);
        WorkflowPage.clickAction("Sửa");
        WorkflowPage.clickActionSave();
        WorkflowPage.checkNotification("Update model sucessfully");
        cy.go("back");
        handleErrow("ttps://stage-apps.symper.vn/#/workflow/");
        data = data.slice(i);
      });
    }

    for (let i = 0; i < data.length; i++) {
      beforeEach(() => {
        cy.loginViaAPISession("dinhnv@symper.vn", "Damthatbai@2010");
      });
      it(`check display notificatio when deploy ${data[i]}`, function () {
        // WorkflowPage.clickWfL();
        WorkflowPage.search(data[i]);
        WorkflowPage.clickAction("Deploy");
        WorkflowPage.checkNotification("Deploy process successfully");
        handleErrow("ttps://stage-apps.symper.vn/#/workflow/");
        data = data.slice(i);
      });
    }
  });
};
testNotificationWfl(data);
