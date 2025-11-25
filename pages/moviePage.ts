import {Page, Locator} from "@playwright/test";
import {LoginEmailPage} from "./loginEmailPage";

export class MoviePage {
    readonly page: Page;
    readonly URL: string;
    readonly watchNowButton: Locator;
    readonly trailerButton: Locator;


    constructor(page: Page, URL: string) {
        this.page = page;
        this.URL = URL;
        this.watchNowButton = page.getByRole('link', { name: 'Kijk nu' });
        this.trailerButton = page.getByRole('link', { name: /^Trailer/ });
    }

    async isWatchNowButtonVisible(): Promise<boolean> {
        return await this.watchNowButton.isVisible();
    }

    async isTrailerButtonVisible(): Promise<boolean> {
        return await this.trailerButton.isVisible();
    }
}