import { test, expect } from '@playwright/test';
import { LoginPage } from '../object/login'

test('proba', async ({ page }) => {

    const Login = new LoginPage(page)

    await page.pause()
    await Login.gotoLoginPage()
    await Login.login('teacherBP1@gmail.com', '12345')
    await Login.logout()
    await browser.close();
});