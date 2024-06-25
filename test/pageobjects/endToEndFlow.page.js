
class endToEndFlow {

    get menHoverElement() {
        return $("//span[normalize-space()='Men']")
    }

    get menTops() {
        return $("li[class='level1 nav-3-1 category-item first parent ui-menu-item']")
    }

    get menHoddies() {
        return $("#ui-id-20")
    }

    get sortBy() {
        return $("#sorter")
    }

    get selectHoodies() {
        return $$(".product-item-link")
    }

    get selectSize() {
        return $$(".swatch-option.text")
    }

    get selectColor() {
        return $$(".swatch-option.color")
    }

    get inputQty() {
        return $("#qty")
    }

    get addToCardButton() {
        return $("#product-addtocart-button")
    }

    get cartQty(){
        return $(".counter-number")
    }4

    get cart(){
        return $(".action.showcart")
    }

    get viewCartDetails(){
        return $(".action.viewcart")
    }

    get cartProduct(){
        return $("td[class='col item'] div[class='product-item-details'] a")
    }

    get itemQtyInCart(){
        return $(".input-text.qty")
    }

    get checkOutButton(){
        return $("button[data-role='proceed-to-checkout']")
    }




    async sortByPrice() {
        await this.sortBy.selectByVisibleText("Price")
    }

    async sortByPosition() {
        (await this.sortBy).selectByAttribute('value', 'position')
    }

    async goToMenHoodies() {
        await this.menHoverElement.moveTo()
        await this.menTops.moveTo()
        await this.menHoddies.moveTo()
        await this.menHoddies.click()
    }

    async addProductToCart(){
        await this.selectHoodies[1].click()
        await this.selectSize[2].click()
        await this.selectColor[1].click()
        await this.inputQty.setValue(3)
        await this.addToCardButton.click()
    }


}

export default new endToEndFlow()