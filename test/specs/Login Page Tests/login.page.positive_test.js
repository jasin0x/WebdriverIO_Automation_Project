import loginPage from "../../pageobjects/login.page.js";

describe("Testing positive test cases of login page",()=>{

    it("Login with valid credentials", async()=>{
        await loginPage.goToLoginPage()
        await loginPage.fillupLoginCredential("testemail@ymail.com","QWER1234!")
        await loginPage.signInButton.click()
        await expect(loginPage.loginVerification).toHaveText("My Account", {message: "Login unsuccessfull with valid cred", wait:5000})
        await loginPage.logout()
    })

    it("Checking if forget password link work or not",async()=>{
        await loginPage.goToLoginPage()
        await loginPage.forgetPasswordLink.click()
        await expect(loginPage.resetPasswordButton).toBeDisplayed({message: "Forget password link broken", wait: 5000})
        await browser.back()
    })

    it("Checking the presence of create account button", async()=>{
        await expect(loginPage.createAccountButton).toBeDisplayed({message:"Create button does not exist in login page"})
    })


})