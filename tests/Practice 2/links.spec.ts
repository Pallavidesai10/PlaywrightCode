import{test, Page, expect}from'@playwright/test'

test('verify linknavigating to apple page', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.getByRole('link', {name: 'Apple'}).click();

    let pageTitle= await page.title();

    expect(pageTitle).toBe('Apple');
});