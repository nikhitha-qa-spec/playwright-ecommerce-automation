const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test('Verify complete checkout flow', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Open application
    await loginPage.openLoginPage();

    // Login
    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    // Add product
    await productsPage.addBackpackToCart();

    // Open cart
    await productsPage.openCart();

    // Verify product in cart
    const itemCount = await cartPage.getCartItem();
    expect(itemCount).toBe(1);

    // Start checkout
    await cartPage.clickCheckout();

    // Verify checkout page
    await expect(page.locator('.title'))
        .toHaveText('Checkout: Your Information');

    // Enter customer details
    await checkoutPage.enterCustomerDetails(
        'Nikhitha',
        'Tester',
        '500001'
    );

    // Continue
    await checkoutPage.continueCheckout();

    // Verify overview page
    await expect(page.locator('.title'))
        .toHaveText('Checkout: Overview');

    // Finish order
    await checkoutPage.finishOrder();

    // Verify successful order
    await expect(checkoutPage.completeMessage)
        .toHaveText('Thank you for your order!');
});