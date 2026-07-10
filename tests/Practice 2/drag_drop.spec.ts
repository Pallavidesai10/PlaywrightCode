
import{test, Page}from'@playwright/test'

test('drag and drop element test', async({page})=>{
//test.describe.configure({retries:1, mode:'parallel'});

    await page.goto('https://testautomationpractice.blogspot.com/');

    let draggable= page.locator('[id="draggable"]');

    let dropable= page.locator('[id="droppable"]');

    await draggable.dragTo(dropable);

    await page.waitForTimeout(3000);

});