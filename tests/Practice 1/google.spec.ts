import test from "@playwright/test";


test('google test', async({page})=>{
    await page.goto('https://google.com');// enter the url
    let title:string= await page.title();// get title
    console.log(title);
    let url:string= await page.url();// get URL
    console.log(url);

   await page.waitForTimeout(2000);
});