

import{test}from'@playwright/test'

test('right context click test', async({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    await page.getByText('right click me', {exact:true}).click({button:'right'});

    await page.pause();

    await page.getByText('Copy',{exact:true}).click();

    await page.pause();
});


test('level 2 submenu handling', async({page})=>{

    await page.goto('https://www.spicejet.com/');

    await page.getByText('Travel Policies').hover();
    await page.getByText('Passenger Rights').waitFor({state:'visible'});
    await page.getByText('Passenger Rights').click();

    await page.pause();

});


test('level 4 submenu handing', async({page})=>{
    await page.goto('https://www.bigbasket.com/', {waitUntil: 'load'});
    await page.getByText('Shop by', { exact: true }).nth(1).click();
    await page.getByRole('link', {name: 'Fashion'}).hover();
    await page.getByText('Footwear').waitFor({state:'visible'});
    await page.getByText('Footwear').hover();
    await page.getByText(`Woomen's Footwear'`).click();
    await page.pause();
});



test('drag and drop handling', async({page})=>{
    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');
    let source= page.locator('[id="draggable"]');
    let target= page.locator('[id="droppable"]');

    await source.dragTo(target);

    await page.pause();
});


test('keyboard enter key handing', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let searchBox= page.getByPlaceholder('Search');
    searchBox.fill('playwright');
    await page.waitForTimeout(2000);

    await searchBox.press('Enter');

    await page.pause();

});


test('keyboard Tab Sequence Accessibility form test', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let firstName= page.getByRole('textbox', { name: 'First Name' });
    await firstName.fill('pallavi');

    await page.keyboard.press('Tab');
    await page.keyboard.type('test');

    await page.keyboard.press('Tab');
    await page.keyboard.type('test@gmail.com');

    page.keyboard.press('Tab');
    await page.keyboard.type('8321977646');

    page.keyboard.press('Tab');

    await page.pause();
});

test('keyboard copy paste test', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let firstName = page.getByRole('textbox', { name: 'First Name' });
    await firstName.fill('Test');

     //Control+A
    //Meta+A
    //ControlOrMeta+A

    await firstName.press('ControlOrMeta+A');
    await firstName.press('ControlOrMeta+C');

    let lastName= page.getByRole('textbox', { name: 'Last Name' });

    await lastName.press('ControlOrMeta+V');

    await page.waitForTimeout(3000);

    await firstName.press('ControlOrMeta+A');
    await firstName.press('Backspace');

    await page.waitForTimeout(2000);

    //hard refresh : control+shift+R

    await page.keyboard.press('ControlOrMeta+Shift+R');

    //open in a new tab/window:

    await page.getByRole('link', { name: 'Forgotten Password', exact: true }).click({modifiers:['ControlOrMeta']});

});