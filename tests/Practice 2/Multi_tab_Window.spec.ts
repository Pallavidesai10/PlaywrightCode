

import{test, Page, Browser, expect, chromium, Locator}from'@playwright/test'

test('launch two seperate pages', async()=>{
    let browser= await chromium.launch();
    let context= await browser.newContext();

    let page2= await context.newPage();
    let page1= await context.newPage();

    await page2.goto('https://orangehrm.com/contact-sales');
    await expect(page2).toHaveTitle('Contact Sales | Get in Touch | HR Software | HRMS | OrangeHRM');

    await page1.goto('https://www.amazon.in/');
    await expect(page1).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');

    let allPages= context.pages();


    console.log('Number of pages: ',allPages.length);
});


test('handle one child page', async({browser})=>{

    let context= await browser.newContext();
    let page= await context.newPage();

    await page.goto('https://orangehrm.com/contact-sales');

    let [childPages]= await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('link', {name: 'About Us'}).click()
    ]);

    childPages.waitForLoadState();

    await childPages.bringToFront();
    expect(childPages).toHaveTitle('Get to Know Us |  Innovating HR Solutions | OrangeHRM');

    await page.bringToFront();
    expect(page).toHaveTitle('Contact Sales | Get in Touch | HR Software | HRMS | OrangeHRM');

    await page.pause();

});


test('multiple window handling', async({browser})=>{
    let context= await browser.newContext();
    let page= await context.newPage();

    await page.goto('https://orangehrm.com/contact-sales');

    let links:Locator[]= [
        page.getByRole('link', {name: 'About Us'}),
        page.getByRole('link', {name: 'Contact Us'}),
        page.getByRole('link', {name: 'Become a Partner'})

    ];

    let childWindowPages:Page[]= []; 

// open all child windows
    for(let link of links){
        let [childWindows]= await Promise.all([
            context.waitForEvent('page'),
            link.click()
        ])

        await childWindows.waitForLoadState();
        childWindowPages.push(childWindows);

    };

// perform actions on child pages
    for(let i=0; i<childWindowPages.length; i++){
        await childWindowPages[i].bringToFront();
        let pageTitle= await childWindowPages[i].title();
        console.log(pageTitle);
        await childWindowPages[i].close();

    };

    await page.bringToFront();
    await expect(page).toHaveTitle('Contact Sales | Get in Touch | HR Software | HRMS | OrangeHRM');
    await page.waitForTimeout(5000);
});