

import{expect, Locator, test}from'@playwright/test'


test('soft asertions', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let heading= page.getByRole('heading', {name:'Register Account', level: 1});

    await expect.soft(heading).toBeVisible();

    let fName= page.getByRole('textbox',{name:'* First Name'});

    await expect.soft(fName).toBeEmpty();
    await expect.soft(fName).toBeEditable();


    expect.soft(page.getByRole('button',{name:'Continue'})).toBeEnabled();

    await page.pause();
});


test('Hard assertion', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let radio= page.getByRole('radio', {name:'No'});

    await expect(radio).toBeChecked();

    let rightColumnLinks= page.locator('div.list-group a');

    


    await page.pause();
});