import { test, expect, chromium } from '@playwright/test';

test('Google has title', async ({  }) => {
    const browser = await chromium.launch({
        headless: false
    })
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.google.com/')
    // await page.fill("textarea[title='Search']", "google")
    await page.waitForTimeout(5000)
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("Google");
});