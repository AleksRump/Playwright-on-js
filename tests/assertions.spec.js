import test, {page, expect} from '@playwright/test'

test('assertions demo', async({page}) => {
    await page.goto('http://ask-int.portnov.com/#/login')
        // check elements present or not
    await expect(page.getByRole('heading', { name: 'Assessment Control' })).toHaveCount(1);
    await page.getByRole('heading', { name: 'Assessment Control' }).click();
    await expect(page.getByRole('heading', { name: 'Portnov Computer School' })).toHaveCount(1);
    await page.getByRole('heading', { name: 'Portnov Computer School' }).click();
    await expect(page.getByRole('img')).toBeVisible();
    await page.getByRole('img').click();
    await page.pause();
    //check element visible or hidden
    await expect.soft(page.locator('text=Portnov Computer School')).toBeVisible();
    await expect.soft(page.locator('text=Portnov Computer School')).toBeHidden();
    await expect.soft(page.locator('text=Assessment Control')).toBeVisible();
    await expect.soft(page.locator('text=Assessment Control')).toBeHidden();
    //check element enabled or disabled
    await expect.soft(page.locator('text=Portnov Computer School')).toBeEnabled();
    await expect.soft(page.locator('text=Portnov Computer School')).toBeDisabled();
    await expect.soft(page.locator('text=Assessment Control')).toBeEnabled();
    await expect.soft(page.locator('text=Assessment Control')).toBeDisabled();
    //check text
    await expect.soft(page.locator('text=Portnov Computer School')).toHaveText('Portnov Computer School');
    await expect.soft(page.locator('text=Assessment Control')).toHaveText('Assessment Control');
    // check atribute value
    await expect.soft(page.locator('text=Portnov Computer School')).toHaveAttribute('class, ');
    await expect.soft(page.locator('text=Assessment Control')).toHaveAttribute('class, ');
    
    // check url
    await expect(page).toHaveURL('http://ask-int.portnov.com/#/login');
    await expect.soft(page).toHaveTitle('Assessment Control @ Portnov');
    //check screenshot
    await expect(page).toHaveScreenshot();
    
})