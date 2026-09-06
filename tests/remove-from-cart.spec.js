const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');

test('Verify user can remove product from cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    // Open application
    await loginPage.openLoginPage();

    // Login
    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    // Add product to cart
    await productsPage.addBackpackToCart();

    // Open cart
    await productsPage.openCart();

    // Verify product is in cart
    expect(await cartPage.getCartItem()).toBe(1);

    // Remove product
    await cartPage.removeBackpack();

    // Verify cart is empty
    expect(await cartPage.getCartItem()).toBe(0);
});