
import {test, Page, FileChooser}from'@playwright/test'

//with CSS
test('single file upload', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // let fileUpload= page.getByRole('button', {name: 'Choose File', exact: true});
    let fileUpload = page.locator('#singleFileInput');

    await fileUpload.setInputFiles("E:/Pallavi/Playwright/PracticeScreenshot.png");

    await page.waitForTimeout(5000);

    //remove file
    await fileUpload.setInputFiles([]);

    await page.pause();
});

test('multiple files upload', async({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('[id="multipleFilesInput"]').setInputFiles([
        "C:/Users/Ram/Downloads/webtablepagination.spec.ts",
        "C:/Users/Ram/Downloads/saucelabsstate.spec.ts"
    ]);


    //remove files
    await page.locator('[id="multipleFilesInput"]').setInputFiles([]);


    await page.pause();
});


//file upload without attribute (type= file)

test('file upload without type=file attribute', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

    let [FileUpload]= await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('#custom-upload-btn').click()

    ]);

    await FileUpload.setFiles("C:/Users/Ram/Downloads/saucelabsstate.spec.ts")
});

test.skip('multiple files upload without input type=file', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

    let[multiFileUpload]= await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('#custom-upload-btn').click()
    
    ]);

    await multiFileUpload.setFiles(["C:/Users/Ram/Downloads/saucelabsstate.spec.ts",
        "C:/Users/Ram/Downloads/saucelabsstate.spec.ts"
    ])

});