class alert_drag_iframe{

    get elementToDrag(){
        return $("#text")
    }

    get placeToDrop(){
        return $("#droppable")
    }

    get dropCinfirmationText(){
        return $("div[id='droppable'] p")
    }

    get simpleAlert(){
        return $("//button[@id='accept']")
    }

    get confirmAlert(){
        return $("#confirm")
    }

    get promptAlert(){
        return $("#prompt")
    }


    async goToDragDropPage(){
        await browser.url("https://letcode.in/dropable")
    }

    async goToAlertPage(){
        await browser.url("https://letcode.in/alert")
    }


    async dragElementToDropLocation(){
        const dragElement = await this.elementToDrag
        const dropTarget = await this.placeToDrop
        //await dragElement.scrollIntoView()
        await dragElement.dragAndDrop(dropTarget)
    }

    async operationOnAlert(){
        await this.simpleAlert.click()
        await this.simpleAlert.acceptAlert()
        await browser.pause(2000)
        await this.confirmAlert.click()
        await this.confirmAlert.dismissAlert()
        await browser.pause(2000)
        await this.promptAlert.click()
        await this.promptAlert.sendAlertText("Murgir dim")
        await this.promptAlert.acceptAlert()
        await browser.pause(2000)
    }

}

export default new alert_drag_iframe()