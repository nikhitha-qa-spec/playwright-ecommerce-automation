const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');

test('Verify user can logout successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    // Open application
    await loginPage.openLoginPage();

    // Login
    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    // Verify products page
    await expect(productsPage.productsTitle)
        .toHaveText('Products');

    // Logout
    await productsPage.logout();

    // Verify login page
    await expect(loginPage.usernameInput)
        .toBeVisible();
});