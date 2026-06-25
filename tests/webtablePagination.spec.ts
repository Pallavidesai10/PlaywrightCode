

import{test}from'@playwright/test'

test('webtable pagination with single selection', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');
    let userPresent= await page.getByRole('cell',{name:'riley_garcia'}).isVisible();

    if(userPresent){
        //user is found on the 1st page:
       // await page.getByRole('cell',{name:'riley_garcia'}).getByRole('checkbox').check();
        await page.locator('#dataTable tr').filter({hasText:'riley_garcia'}).getByRole('checkbox').check();
        
    }
    else{
        //ele is not present on the 1st page, pagination logic:
            //click on next icon
            let nextElement= page.getByRole('button', {name:'›'});
            page.waitForTimeout(2000);
            nextElement.click();

            let nextBtnDisabled= await nextElement.isDisabled();
            if(nextBtnDisabled){
                console.log('pagination is over');
            }
    }

    await page.pause();

    
});


test('webtable pagination with multiple selection', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');

    while (true) {

        let allUsers= await page.locator('#dataTable tr').filter({hasText:'john_doe'}).getByRole('checkbox').all();

        if(allUsers.length>0){
            for(let e of allUsers){
                await e.check();
            }
        }

        let nextEle= page.getByRole('button', {name:'›'});
        let nextBtnDisabled= await nextEle.isDisabled();

        if(nextBtnDisabled){
            console.log('pagination is over');
            break;
        }

        await page.waitForTimeout(1000);
        await nextEle.click();
        
    }

    await page.pause();
});