const { expect } = require("chai");
// const cypress = require("cypress");
const { describe } = require("mocha");
const ApplicationPage = require("../../../page/ApplicationPage.mjs");
const MyItemPage = require("../../../page/MyItemPage.mjs");
import * as el from "../../../element/MyItem.mjs";
const NotificationPage = require("../../../page/NotificationPage.mjs");
import * as noti from "../../../element/Notification.mjs";
const LoginPage = require("../../../page/LoginPage.js");
const notification = require("../../fixtures/data_test_wfl/data_test_notification.mjs");
const status = require("../../fixtures/data_test_wfl/data_test_update_status.mjs");

// import * as el from "../../../element/Login";
const data = require("../../fixtures/data_test_wfl/data_test_login_user.mjs");
const { checkTitle } = require("../../../helper/get_text.js");
const data_test = require("../../fixtures/data_test_wfl/data_test_submit_record.mjs");
const data_test_update = require("../../fixtures/data_test_wfl/data_test_update_record.mjs");
const message = require("../../fixtures/data_test_wfl/data_test_message.mjs");
export const testLogin = function () {
  describe("test submit symper", function () {
    // before(() => {
    //   LoginPage.visit();
    //   LoginPage.submit(data.email, data.password);
    //   ApplicationPage.startWFL();
    //   cy.wait(20000);
    //   MyItemPage.clickMyItem();
    // });
    beforeEach(() => {
      LoginPage.visit();
      LoginPage.submit(data.email, data.password);
      ApplicationPage.startWFL();
    });
    it(`test hiện thị thông báo`, function () {
      ApplicationPage.checkMessageStartWflSuccess(
        message.message_start_wfl_success
      );
      // ApplicationPage.scrollViewToRight(data_test);
      MyItemPage.clickMyItem();
      checkTitle(el.textTitle, notification.title, 0);
      MyItemPage.clickWfl();
      MyItemPage.submitWfl(data_test);
      MyItemPage.checkMessageSubmitSuccess(message.message_submit_complete);
      MyItemPage.getSCT().then(($data) => {
        let sct = $data;
        cy.log(sct);
        ApplicationPage.checkDataAfterSubmit(sct);
      });
      ApplicationPage.checkDetailDoc(data_test);
    });
    // it(`check submit khi người dùng click vào thông báo`, function () {
    //   ApplicationPage.checkMessageStartWflSuccess(
    //     message.message_start_wfl_success
    //   );
    //   NotificationPage.clickNotification();
    //   checkTitle(noti.title_notification, notification.title, 1);
    //   NotificationPage.clickWfl();
    //   MyItemPage.submitWfl(data_test);
    //   MyItemPage.getSCT().then(($data) => {
    //     let sct = $data;
    //     cy.log(sct);
    //     ApplicationPage.checkDataAfterSubmit(sct);
    //   });
    // });
  });

  // describe("test app symper", function () {
  //   let sct;
  //   beforeEach(() => {
  //     LoginPage.visit();
  //     LoginPage.submit(data.email, data.password);
  //     ApplicationPage.startWFL();
  //   });
  //   it(`test hiện thị thông báo`, function () {
  //     cy.wait(20000);
  //     MyItemPage.clickMyItem();
  //     // checkTitle(el.textTitle, notification.title, 0);
  //     MyItemPage.clickWfl();
  //     MyItemPage.submitWfl(data_test);
  //     MyItemPage.getSCT().then(($data) => {
  //       ApplicationPage.clickLogout();
  //       LoginPage.submit(data.email_duyet, data.password);
  //       MyItemPage.clickMyItem();
  //       checkTitle(el.textTitle, notification.titleDuyet + ": " + $data, 0);
  //     });
  //     MyItemPage.clickWfl();
  //     MyItemPage.clickApproval();
  //     MyItemPage.getSTT().should("equal", status.APPROVED);
  //   });
  //   it(`check submit khi người dùng click vào thông báo`, function () {
  //     cy.wait(30000);
  //     NotificationPage.clickNotification();
  //     checkTitle(noti.title_notification, notification.title, 1);
  //     NotificationPage.clickWfl();
  //     MyItemPage.submitWfl(data_test);
  //     MyItemPage.getSCT().then(($data) => {
  //       ApplicationPage.clickLogout();
  //       LoginPage.submit(data.email_duyet, data.password);
  //       NotificationPage.clickWfl();
  //       checkTitle(el.textTitle, notification.titleDuyet + ": " + $data, 0);
  //     });
  //     NotificationPage.clickWfl();
  //     MyItemPage.clickApproval();
  //     MyItemPage.getSTT().should("equal", status.APPROVED);
  //   });
  // });
  // describe("test disapproval symper", function () {
  //   let sct;
  //   beforeEach(() => {
  //     LoginPage.visit();
  //     LoginPage.submit(data.email, data.password);
  //     ApplicationPage.startWFL();
  //   });
  //   it(`test hiện thị thông báo`, function () {
  //     cy.wait(20000);
  //     MyItemPage.clickMyItem();
  //     // checkTitle(el.textTitle, notification.title, 0);
  //     MyItemPage.clickWfl();
  //     MyItemPage.submitWfl(data_test);
  //     MyItemPage.getSCT().then(($data) => {
  //       ApplicationPage.clickLogout();
  //       LoginPage.submit(data.email_duyet, data.password);
  //       MyItemPage.clickMyItem();
  //       checkTitle(el.textTitle, notification.titleDuyet + ": " + $data, 0);
  //     });

  //     MyItemPage.clickWfl();

  //     MyItemPage.clickDisApproval();
  //     MyItemPage.getSTT().should("equal", status.DISAPPROVED);
  //   });
  //   it(`check submit khi người dùng click vào thông báo`, function () {
  //     cy.wait(30000);
  //     NotificationPage.clickNotification();
  //     checkTitle(noti.title_notification, notification.title, 1);
  //     NotificationPage.clickWfl();
  //     MyItemPage.submitWfl(data_test);
  //     MyItemPage.getSCT().then(($data) => {
  //       ApplicationPage.clickLogout();
  //       LoginPage.submit(data.email_duyet, data.password);
  //       NotificationPage.clickWfl();

  //       MyItemPage.clickDisApproval();
  //       MyItemPage.getSTT().should("equal", status.DISAPPROVED);
  //     });
  //   });
  // });

  // describe("test audate", function () {
  //   beforeEach(() => {
  //     LoginPage.visit();
  //     LoginPage.submit(data.email, data.password);
  //     ApplicationPage.startWFL();
  //   });
  //   it(`test hiện thị thông báo`, function () {
  //     cy.wait(20000);
  //     MyItemPage.clickMyItem();
  //     cy.wait(10000);

  //     MyItemPage.clickWfl();
  //     cy.wait(60000);
  //     MyItemPage.submitWfl(data_test);
  //     MyItemPage.getSCT().then(($data) => {
  //       ApplicationPage.clickLogout();
  //       LoginPage.submit(data.email_duyet, data.password);
  //       MyItemPage.clickMyItem();
  //       MyItemPage.clickWfl();
  //       MyItemPage.clickUPdate();
  //       ApplicationPage.clickLogout();
  //       LoginPage.submit(data.email, data.password);
  //       ApplicationPage.openSilder();
  //       ApplicationPage.openTooltip();
  //       ApplicationPage.changeRole();
  //       MyItemPage.clickMyItem();
  //       checkTitle(el.textTitle, notification.titleUpdate + " :" + $data, 0);
  //       MyItemPage.clickWfl();
  //       MyItemPage.submitWfl(data_test_update);
  //     });
  //     // });
  //     // it(`check submit khi người dùng click vào thông báo`, function () {
  //     //   cy.wait(30000);
  //     //   NotificationPage.clickNotification();
  //     //   checkTitle(noti.title_notification, notification.title, 1);
  //     //   NotificationPage.clickWfl();
  //     //   MyItemPage.submitWfl(data_test);
  //     //   MyItemPage.getSCT().then(($data) => {
  //     //     ApplicationPage.clickLogout();
  //     //     LoginPage.submit(data.email_duyet, data.password);
  //     //     NotificationPage.clickWfl();

  //     //     MyItemPage.clickDisApproval();
  //     //     MyItemPage.getSTT().should("equal", status.DISAPPROVED);
  //     //   });
  //   });
  // });
};
testLogin();
