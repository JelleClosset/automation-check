import { test, expect } from '@playwright/test';
import { HomePage } from "../pages/homePage";
import {MoviePage} from "../pages/moviePage";
import {describe} from "node:test";

const movieLinks = [
    "https://www.vtmgo.be/vtmgo/linkeroever~1146b3e3-78dc-4176-b335-ad4659b5346d",
    "https://www.vtmgo.be/vtmgo/one-shot~7532d76f-d5e2-4a2a-8e6e-ac673a91125d",
    "https://www.vtmgo.be/vtmgo/in-the-lost-lands~83d4f32e-6a18-4332-9847-6e8ac3e7ada4",
];

movieLinks.forEach(link => {
    test(`Watch Now and Trailer button visible for: ${link}`, async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.navigateToHomePage();
        await homePage.acceptPrivacyRules();
        const moviePage = await homePage.goToMoviePage(link)
        // .soft to be sure both expects are always checked
        expect.soft(await moviePage.isWatchNowButtonVisible()).toBe(true);
        expect.soft(await moviePage.isTrailerButtonVisible()).toBe(true);
    });
});