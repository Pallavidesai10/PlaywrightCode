

import{Locator, test}from '@playwright/test'


test('wait test', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register',{timeout:3000});

     let lastName: Locator = page.locator('#input-lastname');
        await lastName.fill('naveen', { timeout: 10000 });

        await page.click('#input-lastname', { timeout: 4000});
});