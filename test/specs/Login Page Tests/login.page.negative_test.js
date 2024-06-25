import loginPage from "../../pageobjects/login.page.js";

describe("Testing Negative test cases of login page",()=>{

    it("Login with wrong email", async()=>{
        await loginPage.goToLoginPage()
        await loginPage.fillupLoginCredential("testkmail@ymail.com","QWER1234!")
        await loginPage.signInButton.click()
        await expect(browser).toHaveTitle("Customer Login")
    })

    it("Login with wrong password", async()=>{
        await loginPage.fillupLoginCredential("testemail@ymail.com","QWER4321!")
        await loginPage.signInButton.click()
        await expect(loginPage.incorrectCredentialWarning).toBeDisplayed({wait:3000})
    })

    it("Invalid email address warning",async()=>{
        await loginPage.fillupLoginCredential("testemail@ymail.com!!!","QWER4321!")
        await loginPage.signInButton.click()
        await expect(loginPage.emailErrorWarning).toBeDisplayed({message: "invalid email waring is not displayed"})
    })

    it("Trying to login without filling in the mandatory fields",async()=>{
        await loginPage.emailField.clearValue()
        await loginPage.passwordField.clearValue()
        await loginPage.signInButton.click()
        const errWarning = await $("#email-error")
        await expect(errWarning).toBeDisplayed({message: "Empty field Warning is not displayed", wait: 3000})
    })


})