const { expect } = require("chai");
// const cypress = require("cypress");
const { describe } = require("mocha");
const LoginPage = require("../../../page/LoginPage.js");
const DataflowPage = require("../../../page/DataFlowPage.mjs");
const data = require("../../fixtures/data_test_dataflow/data.js");

import * as data_login from "../../../helper/data_login";

export const testNotificationDts = function (data) {
  describe("test notification", function () {
    before(() => {
      LoginPage.visit();
      LoginPage.submit(data_login.EMAIL, data_login.PASSWORD);
      DataflowPage.clickWfL();
      DataflowPage.findId(data.dataflow_id);
      DataflowPage.clickAction("Sửa");
    });
    for (let i = 0; i < data.id_node.length; i++) {
      it(`check display notificatio when update node ${data.id_node[i]}-${data.dataflow_id}`, function () {
        DataflowPage.clickNode("[model-id=" + data.id_node[i] + "]");
        DataflowPage.clickRun();
        DataflowPage.checkDisPlay("Có lỗi xảy ra khi lấy dữ liệu từ API");
      });
    }
  });
};
for (let i = 0; i < data.length; i++) {
  testNotificationDts(data[i]);
}
