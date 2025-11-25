import {expect, test} from "@playwright/test";
import {HomePage} from "../pages/homePage";

test('Does searchfunction give the right message when Geen Resultaten is searched', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToHomePage();
    await homePage.acceptPrivacyRules();
    // wait untill the message to accept the privacy rules is fully processed
    await page.waitForLoadState('networkidle');
    const searchPage= await homePage.goToSearchPage();
    await searchPage.fillInSearchBar("Geen Resultaten");
    await page.keyboard.press('Enter');
    // wait untill enter is fully processed
    await page.waitForLoadState('networkidle');
    expect(await searchPage.isStringVisible("Er zijn geen resultaten voor deze zoekopdracht")).toBe(true);
});