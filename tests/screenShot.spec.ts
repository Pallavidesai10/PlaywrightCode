

import{test, TestInfo}from'@playwright/test'


test('full page screenshot test', async({page}, testInfo)=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.screenshot({path:'RegistrationPage.png', fullPage: true});// full page screenshot
    await page.screenshot({path:'RegistrationPageVisibleArea.png'});// only visible area

    await page.getByRole('heading', {name: 'Register Account', level: 1}).screenshot({path:'header1.png'});



    //screenshot with options:
    await page.screenshot({
        path: 'customer.png',
        fullPage: true,
        type: 'png',
        omitBackground: true,
        clip: {x:0, y:0, width:600, height:500}
    });


    //attach screenshot to html report
    let screenshot= await page.screenshot({fullPage:true});
    await test.info().attach('RegistrationPage',{
        body: screenshot,
        contentType: 'image/png'
    });


    let ss= await page.screenshot({fullPage:true});
    await test.info().attach('abc',{
        body: ss,
        contentType: 'image/png'
    });




    //attach custom logs:
    let screenS= await page.screenshot({fullPage:true});
    await testInfo.attach('register-log', {
        body: 'User: Pallavi, Cart: 2 items, Total Price: $2000',
        contentType: 'text/plain'
        
    });

});