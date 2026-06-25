

import{test} from '@playwright/test'


test('locators by placeholder value', async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByPlaceholder('First Name').fill('F test2');
    await page.getByPlaceholder('Last Name').fill('L test2');
    await page.getByPlaceholder('E-Mail').fill('test2@abc.com');
    await page.getByPlaceholder('Telephone').fill('9876543210');
    await page.getByRole('textbox', {name: '* Password', exact: true}).fill('Test2@123');
    await page.getByRole('textbox', {name: '* Password Confirm'}).fill('Test2@123');
    await page.locator('[name="agree"]').check();
    await page.waitForTimeout(3000);
    await page.getByRole('button', {name:'Continue'}).click();
    await page.pause();

});