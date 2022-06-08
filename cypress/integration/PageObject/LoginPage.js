class LoginPage {
  visit() {
    cy.visit("https://inter-apps.symper.vn/#/");
  }
  wait(time = 1000) {
    cy.wait(time);
  }
  get fillEmail() {
    return cy.get("#input-20");
  }
  get fillPassWord() {
    return cy.get("#password");
  }
  get getTText() {
    return cy.get(".custom-header-label.flex-grow-1");
  }
  gettitleListText() {
    let arrEl = this.getTText;
    let titleList = [];
    for (let i = 0; i < arrEl.length; i++) {
      let a = arrEl[i].getText();

      titleList.push(a);
    }
    return titleList;
  }
  submit(fillEmail, password) {
    this.fillEmail.type(fillEmail);
    this.fillPassWord.type(`${password}{enter}`);
    let pageHeader = cy.get(".app-header-bg-color");
    // cy.contains("Đăng nhập").click();
  }
  get documentLink() {
    return cy.get(
      ".v-icon.notranslate.collapse.icon-group.v-icon--link.mdi.mdi-file-document-edit-outline.theme--light"
    );
  }

  get listDoc() {
    return cy.get(".v-list-item__title.fm.fs-13").eq(0);
  }
  getdataShowList() {
    this.documentLink.click();
    this.listDoc.click();
  }
}
export default new LoginPage();
