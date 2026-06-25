

import{test}from'@playwright/test'

test('get attribute value', async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let placeholderText= await page.getByRole('textbox', {name:'First Name'}).getAttribute('placeholder');
    console.log(placeholderText);

    let URL= await page.getByRole('link', {name:'Wish List'}).first().getAttribute('href');
    console.log(URL);

})