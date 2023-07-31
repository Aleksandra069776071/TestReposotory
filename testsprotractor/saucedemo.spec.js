const { Saucedemopage } = require("./pages/saucedemopage.js")
const saucedemopage = new Saucedemopage()
const { browser } = require ("protractor")


describe("Sign Up", () => {

    beforeAll(async () => {
        browser.ignoreSynchronization = true;
        await browser.get("https://www.saucedemo.com/")
        
    }),

it("Verify that user can successfully login", async () => {
await saucedemopage.enterName("standard_user")
await saucedemopage.enterPassword("secret_sauce")
await saucedemopage.clickSignUp()
expect(await browser.getCurrentUrl()).toBe('https://www.saucedemo.com/inventory.html')

})

it("Verify that user can add first item to cart", async () => {
    await saucedemopage.addToCart()
    await saucedemopage.clickOnShoppingCart()
    browser.sleep(5000)
    await saucedemopage.verifyItemIsDisplayed()
    
})

it("Verify that user can continue checkout", async () => {
    await saucedemopage.clickOnShoppingCart()
    await saucedemopage.clickCheckoutButton()
    browser.sleep(3000)
    expect(await browser.getCurrentUrl()).toBe('https://www.saucedemo.com/checkout-step-one.html')

        
    })


    it("Verify that user can fullfill information", async () => {
        await saucedemopage.typeFirstName("Aleksandra")
        await saucedemopage.typeLastName("Obradovic")
        await saucedemopage.typezipCode("11000")
        await saucedemopage.clickContinueButton2()
        browser.sleep(3000)
        expect(await browser.getCurrentUrl()).toBe('https://www.saucedemo.com/checkout-step-two.html')   
        })

    it("Verify that user can finish payment", async () => {
        await saucedemopage.clickFinishButton()  
        browser.sleep(3000)
        expect(await browser.getCurrentUrl()).toBe('https://www.saucedemo.com/checkout-complete.html')   
        
    })

})