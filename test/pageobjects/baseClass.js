class BaseClass{

    async scrollToElement(element){
        element.scrollIntoView()
    }

    async mouseHoverOn(element){
        element.moveTo()
    }


}

export default new BaseClass()