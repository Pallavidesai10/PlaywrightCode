
import{Locator, test}from '@playwright/test'


test('total links count', async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
     //links: <a>
    //imags: <img>

    let allLinks: number= await page.locator('a').count();
    console.log('total links are: ', allLinks);
});


test('total links on the page', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let totalLinksOnPg:Locator[]= await page.locator('a').all();
    let totalLinks= totalLinksOnPg.length;
    console.log('ttal number of links are: ', totalLinks);

    for(let e of totalLinksOnPg){
        let linkText: string= await e.innerText();
       // let URL: string= await e.getAttribute('href');
        console.log(linkText);

    }
});

test('total images', async({page})=>{
    await page.goto('https://flipkart.com');
    let allIMG:Locator[]= await page.locator('img').all();
    let totalImages:number= allIMG.length;
    console.log(totalImages);

    for(let e of allIMG){
        let altValue= await e.getAttribute('alt');
        let srcValue= await e.getAttribute('src');
        console.log(altValue, ':', srcValue);
    }

    await page.pause();
});


test('iterate links and click with break', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let links: Locator[]= await page.locator('a.list-group-item').all();//13 links


    for(let e of links){
        await e.highlight();
        let linkText:string= await e.innerText();
        console.log(linkText);
        
        await page.waitForTimeout(2000);

        if(linkText==='Order History'){
           await e.click();
           break;

        }

        
    }

    await page.pause();
})