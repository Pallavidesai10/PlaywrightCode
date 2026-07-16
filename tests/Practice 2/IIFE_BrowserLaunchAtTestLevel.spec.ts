
import { Browser, chromium, Page } from "playwright";
import {firefox, test}from'@playwright/test'


// (async()=>{
//     let browser:Browser= await chromium.launch({channel: 'chromium', headless: false});
//     let page:Page= await browser.newPage();
//     await page.goto('https://testautomationpractice.blogspot.com/');
//     let titlePage:string= await page.title();
//     console.log('title is', titlePage);
//     await browser.close();
// }) ();


test('launch brower', async({browser})=>{
    //let browser:Browser= await firefox.launch({channel: 'firefox', headless: false});
    let page:Page= await browser.newPage();
    await page.goto('https://testautomationpractice.blogspot.com/');
    await browser.close();

});


// (async()=>{
// //let browser: Browser= await chromium.launch({channel:'chrome', headless: false});//Desktop chrome
// //let browser: Browser= await chromium.launch({channel:'chromium', headless:false})//CFT
// //let browser: Browser= await chromium.launch({channel: 'msedge', headless: false});// desktop edge
// let browser:Browser= await chromium.launch({channel:'chrome', headless: false});// chrome
// let page:Page= await browser.newPage();
// //await page.waitForTimeout(3000);
// await page.goto('https://www.amazon.com');
// await page.waitForTimeout(3000);
// let pageTitle:string= await page.title();
// console.log('title is', pageTitle);
// let pageURL:string= page.url();
// console.log('url is', pageURL);
// await page.waitForTimeout(5000);
// browser.close();
// }) ();