
import{test, Page}from'@playwright/test'

test('screenshot test', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.screenshot({path: 'PracticeScreenshot.png', fullPage: true });
});


test('specific field screenshot', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByPlaceholder('Enter Name').screenshot({path: 'NameFieldSS.png'});
});

