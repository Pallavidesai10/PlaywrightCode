
import{test, Page, expect}from '@playwright/test'

test('download single file', async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/download');

    let [fileDownload]= await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('link', {name: 'test-upload.txt'}).click()
    ]);

    //during the download, make sure there is no failure during downloading process
    expect(await fileDownload.failure()).toBeNull();

    let filePath= './downloads/'+ fileDownload.suggestedFilename();

    fileDownload.saveAs(filePath);


});