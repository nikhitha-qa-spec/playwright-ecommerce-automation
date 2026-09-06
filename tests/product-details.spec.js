const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');

test('Verify user can view product details', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    // Open application
    await loginPage.openLoginPage();

    // Login
    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    // Open product details
    await productsPage.openBackpackDetails();

    // Verify product name
    await expect(productsPage.productName)
        .toHaveText('Sauce Labs Backpack');
});