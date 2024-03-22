export default class HomePage {
  static ordersButton() {
    return cy.get('button[routerLink = "/dashboard/myorders"]');
  }

  static showOrders() {
    cy.clickElement(this.ordersButton());
  }
}
