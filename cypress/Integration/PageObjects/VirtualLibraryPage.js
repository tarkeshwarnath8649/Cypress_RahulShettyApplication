/// <reference types = "Cypress" />

export default class VirtaulLibrary {
  static libraryButton() {
    return cy.get('button[routerLink = "/library"]');
  }

  static totalRows() {
    return cy.get("tbody tr");
  }

  static getBooks() {
    cy.clickElement(this.libraryButton());
  }

  static validateCountOfBooks() {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    this.getBooks();
    cy.wait("@retrieveBooks").then((e) => {
      this.totalRows().should("have.length", e.response.body.length);
    });
  }
}
