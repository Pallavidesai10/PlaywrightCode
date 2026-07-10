
import{test, Page}from'@playwright/test'


//.content frame strategy
test('frame locator test with content frame', async({page})=>{
    await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/');
    await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click()

    let LframeLocator= page.locator('[id="frame-one748593425"]');
    await LframeLocator.contentFrame().getByRole('textbox', {name: 'Proposal title *'}).fill('test');
    await page.waitForTimeout(3000);
    
});


test('frame locator test with framelocator strategy', async({page})=>{
    await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/');
    await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click()

    let LframeLocator= page.frameLocator('[id="frame-one748593425"]');
    await LframeLocator.getByRole('textbox', {name: 'Proposal title *'}).fill('test');
    await page.waitForTimeout(3000);
    
});