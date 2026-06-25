
import {test}from "@playwright/test"

test ('Highlight element', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByRole('heading', {name: 'Register Account',level: 1}).highlight();
    await page.pause();

})