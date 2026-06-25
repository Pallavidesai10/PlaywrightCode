
import{test} from "@playwright/test"

test ('extract all links available on the page', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let linkText: string[]= await page.locator('//a[@href]').allInnerTexts();

    
    for (const e of linkText) {
        console.log(e);
    }



});