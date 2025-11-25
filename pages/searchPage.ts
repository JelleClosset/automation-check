import {Page, Locator} from "@playwright/test";
import {LoginEmailPage} from "./loginEmailPage";

export class SearchPage {
    readonly page: Page;
    readonly searchBar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchBar = page.getByRole('searchbox', { name: 'Zoek op titel, personage of' });
    }

    async fillInSearchBar(valueToFillIn: string): Promise<void> {
        await this.searchBar.fill(valueToFillIn);
    }

    async isMovieOrSeriesVisible(name: string): Promise<boolean> {
        return await this.page.getByRole('link', { name: name, exact: true }).isVisible();
    }

    async isStringVisible(string: string): Promise<boolean> {
        return await this.page.getByText(string).isVisible();
    }
}