class homePage {

    hotSellingItems_List = ["Radiant Tee", "Breath-Easy Tank", "Argus All-Weather Tank", "Hero Hoodie",
         "Fusion Backpack", "Push it Messernger Bag"]


    get homePageIcon() {
        return $("//a[@aria-label='store logo']//img")
    }

    get advertiseBoard() {
        return $(".blocks-promo")
    }

    get hotSallersSection(){
        return $("h2[class='title']")
    }

    get hotSalesItemsNames() {
        return $$(".product-item-link")
    }

    get footer(){
        return $("div[class='widget block block-static-block'] ul")
    }

    get footerLinks(){
        return this.footer.$$('a')
    }




    async gettingHotSlaersItemName(){
        // const elements = this.hotSalesItemsNames
        // for(let i=0; i<elements.length;i++ ){
        //     return await elements[i].getText()
        //     // console.log(text)
        // }
        for(let text of this.hotSalesItemsNames){
            console.log(await text.getText())
        }
    }



}

export default new homePage()