import {Page, Locator} from "@playwright/test";
import {LoginEmailPage} from "./loginEmailPage";

export class HomePage {
    readonly page: Page;
    private acceptPrivacyRulesButton: Locator;
    private loginButton: Locator;
    private URL: string;


    constructor(page: Page) {
        this.page = page;
        this.acceptPrivacyRulesButton = page.getByRole('button', { name: 'Akkoord' });
        this.loginButton = page.getByRole('link', { name: 'Inloggen' }).first();
        this.URL="https://www.vtmgo.be/";
    }

    async navigateToHomePage(): Promise<void> {
        await this.page.goto(this.URL);
    }

    async acceptPrivacyRules() {
        await this.acceptPrivacyRulesButton.click();
    }

    async navigateToLoginPage(): Promise<LoginEmailPage> {
        await this.loginButton.isVisible();
        await this.loginButton.click();
        return new LoginEmailPage(this.page);
    }

    async isLoginButtonVisible(): Promise<boolean> {
        await this.loginButton.isVisible();
        return await this.loginButton.isVisible();
    }
}