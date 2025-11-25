import { test, expect } from '@playwright/test';
import { HomePage } from "../pages/homePage";

//test werkt niet door een probleem met de login op VTMGO
test('Does login work properly', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToHomePage();
  await homePage.acceptPrivacyRules();
  const loginEmailPage = await homePage.navigateToLoginPage();
  const loginPasswordPage = await loginEmailPage.fillInEmail("clossetjellegsm@gmail.com");
  const loggednInHomePage = await loginPasswordPage.fillInPassword("Test12345?");
  expect(await loggednInHomePage.isLoginButtonVisible()).toBe(false);
});