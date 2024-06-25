import endToEndFlow from "../../pageobjects/endToEndFlow.page.js";
import homePage from "../../pageobjects/home.page.js"; 
import loginPage from "../../pageobjects/login.page.js";
import shippingPage from "../../pageobjects/shipping.page.js";
import utilities from "../../utilities/utilities.js";

describe("Performing end to end product purchase testing",()=>{

    it("Go to men hoodies page", async()=>{
        const hoodiesPageUrl = "https://magento.softwaretestingboard.com/men/tops-men/hoodies-and-sweatshirts-men.html"
        await loginPage.goToLoginPage()
        await loginPage.fillupLoginCredential("testemail@ymail.com","QWER1234!")
        await loginPage.signInButton.click()
        await homePage.homePageIcon.click()
        await endToEndFlow.goToMenHoodies()
        await expect(browser).toHaveUrl(hoodiesPageUrl, {message:"User is not able to go to hoodis page",wait:3000, afterAssertion: utilities.takeScreenShotAsProof})
        //await browser.pause(3000)
    })

    it("Sort items by price", async()=>{
        await endToEndFlow.sortByPrice()
        await browser.pause(2000)
        //const sortPref = await browser.$("#sorter")
        // const seletedText = await endToEndFlow.sortBy.getText()
        // await expect(seletedText).toHaveValue("Price")
    })

    it("Adding product to the cart and viewing cart", async()=>{
        await endToEndFlow.addProductToCart()
        //await expect(endToEndFlow.cartQty).toHaveText("3")
        await browser.pause(3000)
        await endToEndFlow.cart.click()
        await endToEndFlow.viewCartDetails.click()
        const cartHeading = await browser.$(".base")
        await expect(cartHeading).toHaveText("Shopping Cart",{message:"Shopping cart did not open",wait:3000, afterAssertion: utilities.takeScreenShotAsProof})
    })

    it("Confirming order by filling up customer details",async()=>{
        await endToEndFlow.checkOutButton.scrollIntoView()
        await endToEndFlow.checkOutButton.click()
        await shippingPage.cnofirmOrder()
        await expect(shippingPage.confirmPurchaseMessage).toBeDisplayed({message: "Order has not been confirmed", wait: 3000, afterAssertion: utilities.takeScreenShotAsProof})
    })


})