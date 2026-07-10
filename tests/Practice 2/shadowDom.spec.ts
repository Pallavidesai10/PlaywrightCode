

import{test, Page, expect}from'@playwright/test'

test('shadow dom test', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    await page.locator('[id="shadow_host"]').getByRole('link', {name: 'Blog', exact:true}).click();
    await page.waitForTimeout(2000);
    await page.goBack();
    await page.locator('[id="shadow_host"]').getByRole('checkbox').check();
    await page.waitForTimeout(2000);
    await page.goForward();
    let pageTitle= await page.title();
    expect(pageTitle).toBe('SDET-QA Blog');


});



test('enter paragraph', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.locator('[id="input1"]').
    fill(`this is my programing practise.
         entering paragraph text`);
         await page.waitForTimeout(4000);

});