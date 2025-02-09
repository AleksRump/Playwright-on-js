import {test, expect, chromium} from '@playwright/test'

test('slowmo test', async() =>{

    const browser = await chromium.launch({
        slowMo: 300,
        headless: false
    });

    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: {width: 800, height: 700}
        }
    });

    const page = await context.newPage();

    await page.goto('http://ask-int.portnov.com/#/login');
    await page.getByPlaceholder('Email *').click();
    await page.getByPlaceholder('Email *').fill('teacherBP1@gmail.com');
    await page.getByPlaceholder('Password *').click();
    await page.getByPlaceholder('Password *').fill('12345');
    await page.getByRole('button', { name: 'Sign In' }).click();
    
    await context.close();
    await browser.close();

})