const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Verify successful login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.openLoginPage();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    const title = await loginPage.getProductsTitle();

    expect(title).toBe('Products');
});