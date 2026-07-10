
import{test, Page}from'@playwright/test'

test('mouse hover test', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByRole('button', {name: 'Point Me'}).hover();
    //await page.getByRole('link', {name:'Mobiles'}).waitFor({state:'visible'});

    await page.waitForTimeout(3000)
    await page.getByRole('link', {name:'Mobiles'}).click();


    await page.pause();
});