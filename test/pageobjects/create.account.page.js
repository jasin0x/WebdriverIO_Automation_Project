
class createAccountPage {

    // capturing web elements
    get firstNameField(){
        return $("#firstname")
    }

    get lastNameField(){
        return $("#lastname")
    }

    get emailField(){
        return $("#email_address")
    }

    get passwordField(){
        return $("#password")
    }

    get confirmPasswordField(){
        return $("#password-confirmation")
    }

    get createAccountButton(){
        return $("button[title='Create an Account']")
    }

    get confirmAccount(){
        return $("//span[@class='base']")
    }

    get accountExistWarning(){
        return $("//div[@data-bind='html: $parent.prepareMessageForHtml(message.text)']")
    }

    get requiredFiledWarning(){
        return $$("//div[@class='mage-error' and text()='This is a required field.']")
    }

    get passwordConfirmationError(){
        return $("#password-confirmation-error")
    }





    // actions on elements

    async goToAccountCreationPage(){
        await browser.url("https://magento.softwaretestingboard.com/customer/account/create/")
    }


    async setEmail(email){
        (await this.emailField).setValue(email)
    }

    async setPassword(password){
        (await this.passwordField).setValue(password)
    }

    async setConfirmPassword(confPassword){
        (await this.confirmPasswordField).setValue(confPassword)
    }

    async scrollToCreateButton(){
        (await this.createAccountButton).scrollIntoView()
    }
    

    async fillUpPersonalInfo(firstName, lastName){
        await this.firstNameField.setValue(firstName)
        await this.lastNameField.setValue(lastName)
        
    }

    async fullUpSignInInfo(email,password){
        await this.emailField.setValue(email)
        await this.passwordField.setValue(password)
        await this.confirmPasswordField.setValue(password)
    }

}


export default new createAccountPage()