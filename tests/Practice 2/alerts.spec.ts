
import{test, Page, expect} from'@playwright/test'

test('handle alerts', async({page})=>{

    page.on('dialog', async(popup)=>{
        if(popup.type()==='alert'){
            await popup.accept();
        }
    });

    page.on('dialog', async(popup)=>{
        if(popup.type()==='confirm'){
            popup.dismiss();
        }
    });

    page.on('dialog', async(popup)=>{
        if(popup.type()==='prompt'){
            popup.accept('pop up handled with playwright');
        }
    });


    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByRole('button', {name: 'Simple Alert'}).click();
    await page.getByRole('button', {name: 'Confirmation Alert'}).click();
    await page.getByRole('button',{name: 'Prompt Alert'}).click();

    await page.pause();


  
});


