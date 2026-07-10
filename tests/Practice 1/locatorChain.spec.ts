

import{test}from'@playwright/test'

//parent 
//child
//child
// PW chain: semantic + locator + filter
// Webtable

test('locator chain test', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.locator('form.form-horizontal').getByRole('textbox', {name:'First Name'}).fill('Pallavi');

    await page.locator('form.form-horizontal').getByRole('radio', {name:'Yes'}).click();

    await page.locator('form.form-horizontal').locator('[name="agree"]').check();

    await page.pause();
});


test('webtable checkbox test', async({page})=>{
    await page.goto('https://qavbox.github.io/demo/webtable/');

    let tool= 'QTP';

    await page.locator('[id="table01"]').locator('tr').filter({hasText: `${tool}`}).getByRole('checkbox').check();

    await page.pause();

});

test('webtable button test', async({page})=>{

    await page.goto('https://qavbox.github.io/demo/webtable/');

    let tracker= 'TFS';

    await page.locator('[id="table01"]').locator('tr').filter({hasText:`${tracker}`}).getByRole('button',{name:'Delete'}).click();

    await page.pause();
});

test('webtable column value test', async({page})=>{

    await page.goto('https://qavbox.github.io/demo/webtable/');


    let innerText:string= await page.locator('[id="table02"]').locator('tr').locator('td').filter({hasText: 'Airi Satou'}).innerText();
    console.log(innerText);

    await page.pause();

});


test('webtable user data test', async({page})=>{

    await page.goto('https://qavbox.github.io/demo/webtable/');


    let innerText:string= await page.locator('[id="table02"]').locator('tr').locator('td').filter({hasText: 'Airi Satou'}).innerText();
    console.log(innerText);

    await page.pause();

});

test('webtable user data iterate with for loop', async({page})=>{

    await page.goto('https://qavbox.github.io/demo/webtable/');
    let innerText:string[]= await page.locator('[id="table02"]').locator('tr').filter({hasText: 'Airi Satou'}).locator('td').allInnerTexts();

    console.log(innerText.length);

    for( let e of innerText){
        console.log(e);
    }

    await page.pause();


});


test('webtable total rows and colmns', async ({ page }) => {
    await page.goto('https://qavbox.github.io/demo/webtable/');

    let totalRows= await page.locator('#table02 tr').count();

    let totalColumns= await page.locator('#table02 th').count();

    console.log('total rows are', totalRows, 'and columns are', totalColumns);

});

