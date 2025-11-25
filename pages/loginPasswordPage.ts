import {Page, Locator} from "@playwright/test";
import {HomePage} from "./homePage";

export class LoginPasswordPage {
    readonly page: Page;
    readonly passwordInput: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.passwordInput = page.getByRole('textbox', { name: 'Wachtwoord' });
        this.continueButton = page.getByRole('button', { name: 'Ga verder' });
    }

    async fillInPassword(password: string): Promise<HomePage> {
        await this.passwordInput.isVisible();
        await this.passwordInput.fill(password);
        this.continueButton.click();
        return new HomePage(this.page);
    }
}