


import{test} from '@playwright/test'

test('locators by test data id', async ({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html');
    await page.getByTestId('username-input').fill('test1');
    await page.getByTestId('email-input').fill('test1@gmail.com');
    await page.getByTestId('password-input').fill('Test1@123');

    await page.waitForTimeout(3000);
    await page.getByTestId('form-submit-btn').click();

    await page.pause();

});