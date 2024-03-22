const cred = require("../../Data/userData.json");
//import cred from "../../Data/userData.json";
import Util from "../../UiUtils/UiUtility";

// Page Object Class - This design model is known as Page Object Model
export default class LoginPage {
  static usernameField() {
    return cy.get("#userEmail");
  }
  static passwordField() {
    return cy.get("#userPassword");
  }
  static loginButton() {
    return cy.get("#login");
  }

  static launchUrl() {
    cy.visit("/");
  }

  static getPassword(uname) {
    let pass = "";

    cred.loginData.map((e) => {
      if (e.userName === uname) {
        pass = e.password;
      }
    });
    return pass;
  }

  static loginFunction(uname) {
    this.launchUrl();
    // Util.enterInput(this.usernameField(), uname);
    // Util.enterInput(this.passwordField(this.getPassword(uname)));

    this.usernameField().type(uname);
    this.passwordField().type(this.getPassword(uname));
    this.loginButton().click();
  }
}
