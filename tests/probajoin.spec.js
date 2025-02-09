import {test, expect, chromium} from '@playwright/test'

test('slowmo test', async() =>{

    const browser = await chromium.launch({
        slowMo: 400,
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
await page.getByRole('link', { name: 'Quizzes' }).click();
await page.getByRole('button', { name: 'Create New Quiz' }).click();
await page.getByPlaceholder('Title Of The Quiz *').click();
await page.getByPlaceholder('Title Of The Quiz *').fill('000111111');
await page.getByRole('button', { name: 'Add Question' }).click();
await page.getByText('Textual').click();
await page.getByPlaceholder('Question *').click();
await page.getByPlaceholder('Question *').fill('1111111');
await page.getByRole('button', { name: 'Add Question' }).click();
await page.getByLabel('Q2: new empty question 5').getByText('Single-Choice').click();
await page.getByRole('textbox', { name: 'Question *' }).click();
await page.getByRole('textbox', { name: 'Question *' }).fill('fgjhfgjhfgjghj');
await page.getByPlaceholder('Option 1*').click();
await page.getByPlaceholder('Option 1*').fill('fgjfgjfgjfgj');
await page.getByPlaceholder('Option 2*').click();
await page.getByPlaceholder('Option 2*').fill('fgjfgjfgjfgj');
await page.locator('#mat-radio-12 div').nth(1).click();
await page.getByRole('button', { name: 'Add Question' }).click();
await page.getByLabel('Q3: new empty question 5').getByText('Multiple-Choice').click();
await page.getByRole('textbox', { name: 'Question *' }).click();
await page.getByRole('textbox', { name: 'Question *' }).fill('fgjfgjfgjfgjfg');
await page.getByRole('textbox', { name: 'Option 1*' }).click();
await page.getByRole('textbox', { name: 'Option 1*' }).fill('fgjfgjfgjfgjfgj');
await page.getByRole('textbox', { name: 'Option 2*' }).click();
await page.getByRole('textbox', { name: 'Option 2*' }).fill('fgjfgjfgjfgjfgj');
await page.getByRole('button', { name: 'Add Option' }).click();
await page.getByPlaceholder('Option 3*').click();
await page.getByPlaceholder('Option 3*').fill('fgjfgjfgjfgjfgjfgj');
await page.locator('#mat-checkbox-5 div').first().click();
await page.locator('#mat-checkbox-7 div').first().click();
await page.getByRole('button', { name: 'Save' }).click();
await page.getByRole('button', { name: '000111111 3 Question(s)' }).click();
await page.getByRole('button', { name: 'Delete' }).click();
await page;
await page.getByLabel('Confirmation').locator('button').filter({ hasText: 'Delete' }).click();
await page;
await page.getByText('power_settings_new').click();
await page.locator('button').filter({ hasText: 'Log Out' }).click();

await context.close();
await browser.close();
});