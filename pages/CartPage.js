class CartPage {
    constructor(page) {
        this.page = page;

        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.cartItem = page.locator('.cart_item');

        this.removeBackpackButton = page.locator(
            '[data-test="remove-sauce-labs-backpack"]'
        );
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }

    async getCartItem() {
        return await this.cartItem.count();
    }

    async removeBackpack() {
        await this.removeBackpackButton.click();
    }
}

module.exports = { CartPage };