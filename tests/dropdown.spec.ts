
import{Page, test}from'@playwright/test'


test('jquery drop down value test', async({page})=>{
    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/');
    await page.getByRole('textbox', { name: 'Select' }).first().click();

    let choices=['choice 1', 'choice 2 2', 'choice 6 2 3'];

    selectChoices(page, choices);

    

    await page.pause();
});

  async function selectChoices(page:Page, choices: string[]): Promise <void>{
        for(let ch of choices){

            await page.locator('span.comboTreeItemTitle').filter({hasText:`${ch}`}).first().click();


        }

    }


    

