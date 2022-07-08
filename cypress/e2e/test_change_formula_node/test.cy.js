const { expect } = require("chai");
// const cypress = require("cypress");
const { describe } = require("mocha");
const LoginPage = require("../../../page/LoginPage.js");
const DataflowPage = require("../../../page/DataFlowPage.mjs");
// const data = require("../../fixtures/data_test_dataflow/data.js");
// const data_test = require("../../fixtures/data_test_change_formular_node/data_test");

const data_test = require("../../fixtures/data_test_change_formular_node/data_test_node");
// console.log(data_test);
let data = {};
let id_dataflow;
let id_node;
let colum_name;

let formula_after;
let count = data_test.length;
// for (let i = 0; i < count; i++) {
//   id_dataflow = data_test[i].ID_dataflow;
//   data[id_dataflow] = {};
//   for (let j = 0; j < count; j++) {
//     if (id_dataflow != data_test[j].ID_dataflow) {
//       continue;
//     }
//     id_node = data_test[j].ID_node;
//     data[id_dataflow][id_node] = {};
//     let k;
//     for (k = 0; k < count - 1; k++) {
//       if (data_test[k].ID_dataflow == data_test[k + 1].ID_dataflow) {
//         if (data_test[k].ID_node == data_test[k + 1].ID_node) {
//           if (id_dataflow == data_test[k].ID_dataflow) {
//             if (id_node == data_test[k].ID_node) {
//               colum_name = data_test[k].Column_name;
//               data[id_dataflow][id_node][colum_name] = {};
//               // console.log(data_test[k - 1].formula_after);
//               data[id_dataflow][id_node][colum_name].formula_after =
//                 data_test[k].formula_after;
//               k = k + 1;
//             }
//           } else {
//             colum_name = data_test[j].Column_name;
//             data[id_dataflow][id_node][colum_name] = {};
//             // console.log(data_test[k - 1].formula_after);
//             data[id_dataflow][id_node][colum_name].formula_after =
//               data_test[j].formula_after;
//           }
//         }
//       }
//     }
//   }
// }
// console.log(data["207"]["492beeb3-5a24-4be3-86fb-f494e036a495"]);
// console.log(data);

for (let i = 0; i < count; i++) {
  id_dataflow = data_test[i].ID_dataflow;
  data[id_dataflow] = {};
  for (let j = 0; j < count; j++) {
    if (id_dataflow == data_test[j].ID_dataflow) {
      id_node = data_test[j].ID_node;
      data[id_dataflow][id_node] = {};
      for (let k = 0; k < count; k++) {
        if (
          id_node == data_test[k].ID_node &&
          id_dataflow == data_test[k].ID_dataflow
        ) {
          colum_name = data_test[k].Column_name;
          data[id_dataflow][id_node][colum_name] = {};
          data[id_dataflow][id_node][colum_name].formula_after =
            data_test[k].formula_after;
        }
      }
    }
  }
}

export const testChangFormulaNode = function (data_wfl_id, data) {
  describe("test notification", function () {
    before(() => {
      cy.loginViaAPISession("dinhnv@symper.vn", "Damthatbai@2010");
      cy.visit(
        "https://symper-apps.vthmgroup.vn/#/dataflows/" +
          `${data_wfl_id}` +
          "/edit"
      );
    });
    for (let i = 0; i < Object.keys(data).length; i++) {
      it(`check display notificatio when update node`, function () {
        DataflowPage.clickNode("[model-id=" + `${Object.keys(data)[i]}` + "]");
        let id_node = Object.keys(data)[i];
        // for (let j = 0; j < id_node.length; j++) {
        DataflowPage.patseFomular(data[id_node]);
        // }
        // let b = [];
        // for (let i = 0; i <= Object.keys(data).length; i++) {
        //   let colum_name = Object.keys(data)[i];
        //   b.push(colum_name);
        // DataflowPage.patseFomular(colum_name, data[colum_name].formula_after);

        // DataflowPage.patseFomular(data);

        DataflowPage.clickRun();
        // checkSaveSuceess("Lưu dataflow thành công");
      });
    }
    // after(() => {
    //   {
    //     DataflowPage.clickSave();

    //     DataflowPage.checkSaveSuceess("Lưu dataflow thành công");
    //   }
    // });
  });
};
for (let i = 0; i < Object.keys(data).length; i++) {
  let id = Object.keys(data)[i];

  testChangFormulaNode(id, data[id]);

  // let id_node = Object.keys(data[id]);
  // for (let j = 0; j < id_node.length; j++) {
  //   testChangFormulaNode(id, id_node[j], data[id][id_node[j]]);
  // }
}
