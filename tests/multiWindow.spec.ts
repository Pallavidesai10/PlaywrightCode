

import{Locator, Page, test}from'@playwright/test'


test('two windows handle test', async({browser})=>{
   let context= await browser.newContext();
   let page= await context.newPage();

   await page.goto('https://orangehrm.com/contact-sales');

   let [childWindowPage]= await Promise.all([
    context.waitForEvent('page'),// start listening to the page event in the browser
    page.getByRole('link',{name:'About Us'}).click()// this will click on the link

   ]);

   await childWindowPage.waitForLoadState();

   let allPages= context.pages();
   console.log('total number of pages are', allPages.length);

    await childWindowPage.bringToFront();
    console.log('child window title is', await childWindowPage.title());
    await childWindowPage.close();


    await page.bringToFront();
    console.log('parent window title is', await page.title());

    await page.pause();


});


test('multiple windows handle test', async({browser})=>{
    let context= await browser.newContext();
    let page= await context.newPage();

   await page.goto('https://orangehrm.com/contact-sales');

    //array of links locator:
    let links:Locator[]= [
        page.getByRole('link', { name: 'About Us' }),
        page.getByRole('link', { name: 'Contact Us' }),
        page.getByRole('link', { name: 'Press Releases' }),
        page.getByRole('link', { name: 'Become a Partner' })

    ];

    let childWindowPages:Page[]=[];

    //open all child windows

    for(let link of links){
        let [childWindow]=await Promise.all([
            context.waitForEvent('page'),
            link.click()
        ]);

        await childWindow.waitForLoadState();
        childWindowPages.push(childWindow);
    };

    console.log('total number of pages:', context.pages().length);

    //go to each child window, get the title and close it

    for(let i=0; i<childWindowPages.length; i++){
        let child= childWindowPages[i];
        await child.bringToFront();
        console.log(await child.title());
        await child.waitForTimeout(2000);
        await child.close();

    };

    //back to parent window, only one tab is left

    await page.bringToFront();
    console.log(await page.title()); 
    console.log('Remaining pages', context.pages().length);

    await page.pause();

})