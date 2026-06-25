
import{test}from'@playwright/test'


test('google search test', async({page})=>{

    await page.goto('https://www.google.com');
    await page.getByRole('combobox',{name:'Search'}).fill('gemini');
    await page.getByRole('option', {name:'gemini prompt'}).click();

    await page.pause();
});


test('flipcart search test', async({page})=>{

    await page.goto('https://www.flipkart.com/');

    await page.getByRole('button',{name:'✕'}).click();
    await page.getByRole('textbox',{name:'Search for Products, Brands and More'}).fill('tv');
    await page.getByRole('link',{name:'tv 55 inch'}).click();

    await page.pause();
});