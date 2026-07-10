
import{test, Page, expect}from '@playwright/test'

test('table data test', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    let userExist= await page.locator('[name="BookTable"]').filter({hasText:'Mukesh'}).isVisible();
    expect(userExist).toBeTruthy();

    await page.pause();
});