import {expect, test} from "@playwright/test";
import {HomePage} from "../pages/homePage";

test('Does searchfunction find Familie', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToHomePage();
    await homePage.acceptPrivacyRules();
    const searchPage= await homePage.goToSearchPage();
    await searchPage.fillInSearchBar("Familie");
    await page.keyboard.press('Enter');
    // wait untill enter is fully processed
    await page.waitForLoadState('networkidle');
    expect(await searchPage.isMovieOrSeriesVisible("Familie Reeks")).toBe(true);
});