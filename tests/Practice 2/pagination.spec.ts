
import{test, Page}from'@playwright/test'

test('pagination test', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    let webTableContent= page.locator('[id="productTable"]').filter({hasText:'Router'});

    for(let i=1; i<=4; i++){
        if(await webTableContent.isVisible()){
        await webTableContent.getByRole('checkbox').check();

        await page.pause();

    }

    else{
        await page.getByRole('link',{name: `${i}`, exact: true}).click();

    }

}
});