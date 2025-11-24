import { test, expect } from '@playwright/test';
import { HomePage } from "../pages/homePage";

test('has title', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToHomePage();
    await homePage.acceptPrivacyRules();
    const loginEmailPage = await homePage.navigateToLoginPage();
    const loginPasswordPage = await loginEmailPage.fillInEmail("clossetjellegsm@gmail.com");
    const loggednInHomePage = await loginPasswordPage.fillInPassword("Test12345?");
    expect(await loggednInHomePage.isLoginButtonVisible()).toBe(false);
});