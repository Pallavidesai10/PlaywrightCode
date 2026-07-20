
import{test, Page, expect} from'@playwright/test'


test('dropdown practice test', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByRole('combobox', {name: 'Country'}).selectOption({value: 'india'});
    
    await page.pause();
});



test('select multiple options from dropdown', async({page})=>{
    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/');
    await page.getByRole('textbox', {name:'Select'}).first().click();
    
    let choice=['choice 1', 'choice 2', 'choice 2 1'];

    selectmultiChoices(page, choice);


    async function selectmultiChoices(page:Page, choice:string[]) {
        for(let ch of choice){
            await page.locator('span.comboTreeItemTitle').filter({hasText: `${ch}`}).first().click();
        }
        
    }

    await page.pause();

});


test('multi value', async({page})=>{
    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/');
    await page.getByRole('textbox', {name:'Select'}).selectOption(['choice 1', 'choice 2', 'choice 2 1']);
    await page.pause();


})



test('scrolling dropdown', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.getByRole('textbox',{name: 'Select an item'}).click();
    await page.getByText('Item 6', {exact: true}).click();

    await page.pause();



});