import{test, Page}from'@playwright/test'

test('double click test', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByRole('button', {name:'Copy Text'}).dblclick();

    await page.pause();
})