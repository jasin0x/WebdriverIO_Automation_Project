import createAccountPage from "../../pageobjects/create.account.page.js"
import baseClass from "../../pageobjects/baseClass.js"

describe("Performing positive tests on account creation page",()=>{

    it("Checking if the account creation page is accessible",async()=>{
        await createAccountPage.goToAccountCreationPage()
        await expect(browser).toHaveUrl("https://magento.softwaretestingboard.com/customer/account/create/")
        //await browser.pause(1000)
    })

    it("Checking if the first & last name field can take input from user",async()=>{
        //await createAccountPage.goToAccountCreationPage()
        await createAccountPage.fillUpPersonalInfo("Deshi","Murgi")
        await expect(createAccountPage.firstNameField).toHaveValue("Deshi")
        await expect(createAccountPage.lastNameField).toHaveValue("Murgi")
        //await browser.pause(2000)
    })

    it("Checking if the Sign in information form is filled up",async()=>{
        //await createAccountPage.goToAccountCreationPage()
        // const { faker } = require('@faker-js/faker')
        // const randomEmail = faker.internet.email();
        await createAccountPage.fullUpSignInInfo("deshimurgi17@ymail.com","Murgi123#")
        await expect(createAccountPage.emailField).toHaveValue("deshimurgi17@ymail.com")
        await expect(createAccountPage.passwordField).toHaveValue("Murgi123#")
        await expect(createAccountPage.confirmPasswordField).toHaveValue("Murgi123#")
        //await browser.pause(3000)
    })

    it("Testing presence of create account button",async()=>{
        await baseClass.scrollToElement(createAccountPage.createAccountButton)
        await expect(createAccountPage.createAccountButton).toBeDisplayed()
    })

    it("Testing if create account button is Clickable",async()=>{
        await baseClass.scrollToElement(createAccountPage.createAccountButton)
        await expect(createAccountPage.createAccountButton).toBeClickable()
    })

    it("Confirm account creation",async()=>{
        await baseClass.scrollToElement(createAccountPage.createAccountButton)
        await createAccountPage.createAccountButton.click()
        await expect(createAccountPage.confirmAccount).toHaveText("My Account", {message: "Account wiht this email already exists", wait:5000})
        await browser.pause(15000)
    })

    
})