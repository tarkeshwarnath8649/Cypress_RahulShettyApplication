/// <reference types = "Cypress" />

import LoginPage from "../PageObjects/LoginPage";
import HomePage from "../PageObjects/HomePage";
import cred from "../../Data/userData.json";
import VirtaulLibrary from "../PageObjects/VirtualLibraryPage";

describe("Login Page Test", () => {
  it("Verify Login Functionality", () => {
    LoginPage.loginFunction(cred.loginData[1].userName);
  });
});

it("Login via login API", () => {
  cy.loginAPI().then(() => {
    cy.visit("https://rahulshettyacademy.com/client/", {
      onBeforeLoad: function (window) {
        window.localStorage.setItem("token", Cypress.env("loginToken"));
      },
    });
  });
  cy.wait(2000);
  HomePage.showOrders();
});

//.only executes only single IT block
it.only("Validate count of rows", () => {
  VirtaulLibrary.validateCountOfBooks();
});
