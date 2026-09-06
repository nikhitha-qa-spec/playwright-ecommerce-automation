const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');

test('Verify user can add product to cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    // Open application
    await loginPage.openLoginPage();

    // Login
    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    // Add backpack to cart
    await productsPage.addBackpackToCart();

    // Open cart
    await productsPage.openCart();

    // Verify backpack is displayed in cart
    const cartItem = page.locator('.inventory_item_name');

    await expect(cartItem).toHaveText('Sauce Labs Backpack');
});