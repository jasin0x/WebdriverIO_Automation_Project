class shippingPage{

    get addressField(){
        return $("#OXQUX35")
    }

    get city(){
        return $("#AU3I5KG")
    }

    get selectState(){
        return $("(//select[@id='DPWNX10'])[1]")
    }

    get zipCode(){
        return $("(//input[@id='FBWFPN1'])[1]")
    }

    get selectCountry(){
        return $("(//select[@id='SQL2AQN'])[1]")
    }

    get setPhoneNumber(){
        return $("(//input[@id='NM5DOXM'])[1]")
    }

    get setShippingMethod(){
        return $("input[value='tablerate_bestway']")
    }

    get nextPageButton(){
        return $("//span[normalize-space()='Next']")
    }

    get placeOrderButton(){
        return $("//span[normalize-space()='Place Order']")
    }

    get confirmPurchaseMessage(){
        return $(".base")
    }


    async cnofirmOrder(){
        await this.setShippingMethod.click()
        await this.nextPageButton.click()
        await this.placeOrderButton.click()
    }


}

export default new shippingPage()