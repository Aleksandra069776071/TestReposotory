const { element, by } = require("protractor");


class Saucedemopage{
    #nameInput = element(by.id("user-name"))
    #passwordInput = element(by.id("password"))
    #loginButton = element(by.id("login-button"))
    #inventoryListFirstItem = element.all(by.id("https://www.saucedemo.com/inventory.html")).first();
    #addToCartFirstButton = element(by.id("add-to-cart-sauce-labs-backpack"));
    #shoppingCart = element(by.id("shopping_cart_container"));
    #shoppingitem = element(by.id('item_4_title_link'));
    #checkoutButton = element(by.id("checkout"));
    #firstName = element(by.id("first-name"));
    #lastName = element(by.id("last-name"));
    #zipCode = element(by.id("postal-code"));
    #continueButton = element(by.id("data-test"));
    #continueButton2 = element(by.id("continue"));
    #finishButton = element(by.id("finish"));

    async clickFinishButton(){
        await this.#finishButton.click()
    }

    async clickContinueButton2(){
        await this.#continueButton2.click()
    }

    async clickContinueButton(){
        await this.#continueButton.click()
    }

    async typeFirstName(name){
        await this.#firstName.sendKeys(name)
    }

    async typeLastName(lastname){
        await this.#lastName.sendKeys(lastname)
    }

    async typezipCode(zipcode){
        await this.#zipCode.sendKeys(zipcode)
    }


    async clickOnShoppingCart(){
        await this.#shoppingCart.click()
    }

    async clickCheckoutButton(){
        await this.#checkoutButton.click()
    }

    async enterName(name){
        await this.#nameInput.sendKeys(name)
    }

    async enterPassword(password){
        await this.#passwordInput.sendKeys(password)
    }

    async clickSignUp(){
        await this.#loginButton.click()

    }

    async addToCart(){
        await this.#addToCartFirstButton.click()

    }

    async verifyItemIsDisplayed(){
        await this.#shoppingitem.isDisplayed()
    }

}

exports.Saucedemopage = Saucedemopage;