import {Page, Locator} from "@playwright/test";
import {LoginPasswordPage} from "./loginPasswordPage";

export class LoginEmailPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByRole('textbox', { name: 'E-mailadres' });
        this.continueButton = page.getByRole('button', { name: 'Ga verder' });
    }

    async fillInEmail(email: string): Promise<LoginPasswordPage> {
        await this.emailInput.fill(email);
        this.continueButton.click();
        return new LoginPasswordPage(this.page);
    }
}