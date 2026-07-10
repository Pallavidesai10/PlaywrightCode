
import{test, Page}from'@playwright/test'

test('test dynamic button', async({page})=>{
    let startBtnName= 'START';
    let stopBtnName= 'STOP';

    await page.goto('https://testautomationpractice.blogspot.com/');
    page.getByRole('button', {name: `${startBtnName}`}).click();
    page.getByRole('button', {name: `${stopBtnName}`}).click();

    await page.pause();
});

