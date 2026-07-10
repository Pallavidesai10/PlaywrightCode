

import{test} from'@playwright/test'


test('JS alters test', async({page})=>{
    // 1 - Alert-- just accept it..

    page.on('dialog', async(popup)=>{
        if(popup.type()==='alert'){
            console.log(popup.message());
           await popup.accept();
        }
    });

    // 2 - Confirm--accept/cancel it..
    page.on('dialog', async(popup)=>{
        if(popup.type()==='confirm'){
            console.log(popup.message());
            await popup.dismiss();
            //await popup.accept();

        }
    });


    // 3 - Confirm-- accept with some text input
    page.on('dialog', async(popup)=>{
        if(popup.type()==='prompt'){
            console.log(popup.message());
            await popup.accept('popup accepted'); 
        
        }
    });


    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    await page.getByRole('button',{name:'Click for JS Alert'}).click();

    await page.waitForTimeout(3000);

    await page.getByRole('button',{name:'Click for JS Confirm'}).click();

    await page.waitForTimeout(3000);
    await page.getByRole('button',{name:'Click for JS Prompt'}).click();

    await page.pause();
})