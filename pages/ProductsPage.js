class ProductsPage {
    constructor(page) {
        this.page = page;

        this.productsTitle = page.locator('.title');
        this.backpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartIcon = page.locator('.shopping_cart_link');

        this.menuButton = page.locator('#react-burger-menu-btn');
        this.logoutLink = page.locator('#logout_sidebar_link');

        // Product details
        this.backpackProduct = page.locator('[data-test="item-4-title-link"]');
        this.productName = page.locator('.inventory_details_name');
    }

    async addBackpackToCart() {
        await this.backpack.click();
    }

    async openCart() {
        await this.cartIcon.click();
    }

    async logout() {
        await this.menuButton.click();
        await this.logoutLink.click();
    }

    async openBackpackDetails() {
        await this.backpackProduct.click();
    }
}

module.exports = { ProductsPage };