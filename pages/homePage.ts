import {Page, Locator} from "@playwright/test";
import {LoginEmailPage} from "./loginEmailPage";
import {MoviePage} from "./moviePage";
import {SearchPage} from "./searchPage";

export class HomePage {
    readonly page: Page;
    readonly acceptPrivacyRulesButton: Locator;
    readonly loginButton: Locator;
    readonly searchButton: Locator;
    readonly URL: string;


    constructor(page: Page) {
        this.page = page;
        this.acceptPrivacyRulesButton = page.getByRole('button', { name: 'Akkoord' });
        this.loginButton = page.getByRole('link', { name: 'Inloggen' }).first();
        this.searchButton = page.getByRole('link', { name: 'Zoeken' });
        this.URL = "https://www.vtmgo.be/";
    }

    async navigateToHomePage(): Promise<void> {
        await this.page.goto(this.URL);
    }

    async acceptPrivacyRules(): Promise<void> {
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

    async goToMoviePage(URL: string): Promise<MoviePage> {
        await this.page.goto(URL);
        return new MoviePage(this.page, URL);
    }

    async goToSearchPage(): Promise<SearchPage> {
        await this.searchButton.click();
        return new SearchPage(this.page);
    }
}