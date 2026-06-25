import test from "@playwright/test";


test('fill with delay', async({page})=>{
    
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=product/product&product_id=42');
    await page.getByRole('textbox', {name: '* Textarea'}).pressSequentially('test sequentially typing',{delay: 300});

    await page.pause();
})