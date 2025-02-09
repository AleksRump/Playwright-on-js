import { test, expect } from '@playwright/test'


test.beforeEach(async ({ page }) => {
    //login hooks для всех тестов перед
    await page.goto('https://www.saucedemo.com/')
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html');
})

test.afterEach(async ({ page }) => {
    //close page hooks для всех тестов после
    await page.close()
})

test.describe('Group Tests', () => {//смести сюда что бы хуки были вне группы и это для всех
    test('homepage', async ({ page }) => {

        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        await page.locator('[data-test="item-1-title-link"]').click();
        await page.locator('[data-test="add-to-cart"]').click();
        await page.locator('[data-test="back-to-products"]').click();
    })

    test('logout', async ({ page }) => {

        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();
        await page.waitForURL('https://www.saucedemo.com/');
    })
});

test('logout1', async ({ page }) => {

    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await page.waitForURL('https://www.saucedemo.com/');

})