

import{test} from '@playwright/test'


test('fetch the text by using input value', async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register',{waitUntil: 'load'});
    await page.getByRole('textbox', {name: 'First Name'}).fill('Pallavi');
    let fName= await page.getByRole('textbox', {name: 'First Name'}).inputValue();
    console.log(fName);
})