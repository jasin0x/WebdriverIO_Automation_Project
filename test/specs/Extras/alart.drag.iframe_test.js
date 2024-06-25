import alart_drag_iframe from "../../pageobjects/alart_drag_iframe.js"

describe("Testing Drag&Drops, alerts, and iFrames",()=>{
    it("Performing drag and drop",async()=>{
        await alart_drag_iframe.goToDragDropPage()
        await alart_drag_iframe.dragElementToDropLocation()
        await browser.pause(3000)
        await expect(alart_drag_iframe.dropCinfirmationText).toHaveText("Dropped!")
    })
})