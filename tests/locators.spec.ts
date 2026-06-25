import test from "@playwright/test";


test('NAL registration', async({page})=>{
await page.setViewportSize({height:800, width:1300});
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.getByRole('link', {name:'Register'}).click();
    await page.waitForLoadState('domcontentloaded');
    let visibility: boolean= await page.getByRole('heading', {name: 'Register Account', level: 1}).isVisible();


    if (visibility) {
        await page.getByRole('textbox', {name: 'First Name'}).fill('Ftest');
        await page.getByRole('textbox', {name: 'Last Name'}).fill('Ltest');
        await page.getByRole('textbox', {name: 'E-Mail'}).fill('test1@gmail.com');
        await page.getByRole('textbox', {name: 'Telephone'}).fill('987654210');
        await page.locator(`input[id="input-password"]`).fill('Test@123');//css
        await page.locator(`//input[@id="input-confirm"]`).fill('Test@123');//xpath
        await page.locator('//input[@name="agree"]').check();//xpath
       // await page.getByRole('textbox', {name: 'Password', exact: true}).fill('Test@123');
        //await page.getByRole('textbox', {name: 'Password Confirm'}).fill('Test@123');
        //await page.getByRole('checkbox', {name: 'agree'}).click();
        await page.getByRole('button', {name: 'Continue'}).click();
 }

else{
    console.log('Element not visible');
     }
} );


test('checkbox test', async({page})=>{
    await page.goto('https://testing.qaautomationlabs.com/index.php');
    await page.getByRole('link',{name:'CheckBox'}).first().click();
    await page.getByRole('checkbox', {name: 'Enable Checkbox 1'}).check();
    await page.getByRole('checkbox', {name:'Checkbox 3', exact:true}).check();

    await page.pause();

});


test('radio button', async({page})=>{
    await page.goto('https://testing.qaautomationlabs.com/index.php');
    await page.getByRole('link', {name:' Radio Button'}).click();
    await page.getByRole('radio', { name: 'Female' }).nth(0).click();
    await page.getByRole('radio', {name: 'Female'}).nth(1).click();
    await page.getByRole('radio', {name:' Under 18'}).click();

    await page.pause();
});

test('textarea', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=42');

    let address= `flat-46, Mangalprabha,
    pipeline road, Ganesh nagar,
    Ravet- 412101`
    
    await page.getByRole('textbox', {name:'Textarea'}).fill(address);
})