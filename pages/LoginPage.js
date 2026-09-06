class LoginPage {
    constructor(page) {
        this.page = page;

        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.productsTitle = page.locator('.title');
    }

    async openLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getProductsTitle() {
        return await this.productsTitle.textContent();
    }
}

module.exports = { LoginPage };