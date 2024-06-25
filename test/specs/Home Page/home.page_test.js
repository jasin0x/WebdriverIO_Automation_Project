import homePage from "../../pageobjects/home.page.js"; 
import loginPage from "../../pageobjects/login.page.js";
import baseClass from "../../pageobjects/baseClass.js";

describe("Testing home page elements",()=>{

    it("Go to homepage after login", async()=>{
        await loginPage.goToLoginPage()
        await loginPage.fillupLoginCredential("testemail@ymail.com","QWER1234!")
        await loginPage.signInButton.click()
        await homePage.homePageIcon.click()
        await expect(browser).toHaveTitle("Home Page")
    })

    it("Checking the presence of advetising baner", async()=>{
        await expect(homePage.advertiseBoard).toBeDisplayed({message: "Baner is not displayed", wait: 5000})
    })

    it("Checking if the hot sales section presetn in home page",async()=>{
        await baseClass.scrollToElement(homePage.hotSallersSection)
        await expect(homePage.hotSallersSection).toHaveText("Hot Sellers")
    })

    // it("Are the desired Items present in hot sellers section",async()=>{
    //     //wait homePage.gettingHotSlaersItemName()
    //     await homePage.gettingHotSlaersItemName()
    // })

    it("Verify if the links in the footer works", async()=>{
        await baseClass.scrollToElement(homePage.footer)
        const linksInFooter = await homePage.footerLinks
        for(let i=0; i<linksInFooter.length; i++){
            await linksInFooter[i].click()
            await browser.pause(1000)
        }

        const totalTabs = await browser.getWindowHandles()
        for(let i=totalTabs.length-1; i>=0; i--){
            await browser.switchToWindow(totalTabs[i])
            //console.log((await (browser.getWindowHandle())).length)
            await browser.pause(1000)
            await browser.closeWindow() 
        }
        await expect(totalTabs.length).toEqual(5)
    })



})