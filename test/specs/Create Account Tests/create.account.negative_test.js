import createAccountPage from "../../pageobjects/create.account.page.js"
import baseClass from "../../pageobjects/baseClass.js"


describe("Performing negative tests on account creation page", ()=>{

    it("Empty field warning messages display or not", async()=>{
        await createAccountPage.goToAccountCreationPage()
        await baseClass.scrollToElement(createAccountPage.createAccountButton)
        await createAccountPage.scrollToCreateButton()
        await createAccountPage.createAccountButton.click()
        const erorrMessage = await createAccountPage.requiredFiledWarning
        for(let reqField of erorrMessage){
            await expect(reqField).toHaveText("This is a required field.")
            //console.log(warning)
        }
    })

    it("Attempt to creat account with Used email", async()=>{
        //await createAccountPage.goToAccountCreationPage()
        await createAccountPage.fillUpPersonalInfo("Deshi","Murgi")
        await createAccountPage.fullUpSignInInfo("deshimurgi1@ymail.com","Murgi123#")
        //await baseClass.scrollToElement(createAccountPage.createAccountButton)
        await createAccountPage.createAccountButton.click()
        await expect(createAccountPage.accountExistWarning).toBeDisplayed()
        //const warningText = await createAccountPage.accountExistWarning.getText()
        await expect(createAccountPage.accountExistWarning).toHaveText("There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.",{message: "Warning not given for existing account"})
    })


    it("User is not able to create account with unmatched password", async()=>{
        await createAccountPage.fillUpPersonalInfo("Deshi","Murgi")
        await createAccountPage.fullUpSignInInfo("deshimurgi1@ymail.com","Murgi123#")
        await createAccountPage.confirmPasswordField.setValue("Murgi321#")
        await createAccountPage.createAccountButton.click()
        await expect(createAccountPage.passwordConfirmationError).toBeDisplayed({message:"Unmatched password waring not displayed", wait:5000})
    })
    

})