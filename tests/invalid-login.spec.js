const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Verify login with invalid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.openLoginPage();

    await loginPage.login(
        'invalid_user',
        'wrong_password'
    );

    const errorMessage = page.locator('[data-test="error"]');

    await expect(errorMessage).toBeVisible();
});