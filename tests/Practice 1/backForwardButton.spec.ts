
import{test} from'@playwright/test'


test('Backward and Forward button test', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
    console.log(await page.title());

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    console.log(await page.title());

    await page.goBack();
    console.log(await page.title());

    await page.goForward();
    console.log(await page.title());

    
    await page.goBack();
    console.log(await page.title());

    await page.pause();


})