import * as el from "../element/Notification.mjs";
class NotificationPage {
  clickNotification() {
    cy.get(el.btn_notification).click();
  }
  clickWfl() {
    cy.get(el.title_notification).eq(1).click();
  }
}
export default new NotificationPage();
