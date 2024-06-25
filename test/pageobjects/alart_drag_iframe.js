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

    async goToDragDropPage(){
        await browser.url("https://letcode.in/dropable")
    }


    async dragElementToDropLocation(){
        const dragElement = await this.elementToDrag
        const dropTarget = await this.placeToDrop
        //await dragElement.scrollIntoView()
        await dragElement.dragAndDrop(dropTarget)
    }

}

export default new alert_drag_iframe()