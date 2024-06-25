class loginPage{

    get emailField(){
        return $("//input[@id='email']")
    }
    
    get passwordField(){
        return $("#pass")
    }

    get signInButton(){
        return $("//fieldset[@class='fieldset login']//span[contains(text(),'Sign In')]")
    }

    get forgetPasswordLink(){
        return $("a[class='action remind'] span")
    }

    get createAccountButton(){
        return $("a[class='action create primary'] span")
    }

    get loginVerification(){
        return $("//span[@class='base']")
    }

    get profileDropDown(){
        return $("(//button[@type='button'])[1]")
    }

    get signOut(){
        return $("//div[@aria-hidden='false']//a[normalize-space()='Sign Out']")
    }

    get resetPasswordButton(){
        return $("button[class='action submit primary']")
    }

    get incorrectCredentialWarning(){
        return $("//div[@role='alert']")
    }

    get emailErrorWarning(){
        return $("#email-error")
    }




    async goToLoginPage(){
        await browser.url("https://magento.softwaretestingboard.com/customer/account/index/")
    }

    async fillupLoginCredential(email, password){
        await this.emailField.setValue(email)
        await this.passwordField.setValue(password)
    }

    async logout(){
        await this.profileDropDown.click()
        await this.signOut.click()
    }


}

export default new loginPage()