

import{expect, test}from'@playwright/test';
import fs from'fs';

test('single file download', async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/download');

    let[fileDownload]= await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('link', {name: 'Designer.png'}).click()
    ]);

    //during the download, make sure there is no during downloading process
    expect(await fileDownload.failure()).toBeNull();

    //get the file name
    console.log('file name is', fileDownload.suggestedFilename());

    //save downloaded file to specific location
    let filePath= './downloads/'+ fileDownload.suggestedFilename();
    await fileDownload.saveAs(filePath);

    //verify the file exists:
    expect(fs.existsSync(filePath)).toBeTruthy();

    //verify file size is >0

    let fileSize= fs.statSync(filePath).size;
    console.log('fileSize in bytes: ', fileSize);
    expect(fileSize).toBeGreaterThan(0);

    await page.pause();

});