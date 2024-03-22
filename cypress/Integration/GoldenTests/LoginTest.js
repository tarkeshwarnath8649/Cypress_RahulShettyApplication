import LoginPage from "../PageObjects/LoginPage";
import cred from "../../Data/userData.json";

describe("Login Page Test", () => {
  it("Verify Login Functionality", () => {
    LoginPage.loginFunction(cred.loginData[1].userName);
  });
});
