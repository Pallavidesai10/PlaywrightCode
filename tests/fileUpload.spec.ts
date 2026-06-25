
import{test}from'@playwright/test'


test('upload single file', async({page})=>{

     //it should have type="file" attribute
    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

    await page.locator('#single-file').setInputFiles("C:\Users\Ram\Downloads\psuedoele.spec.ts");

    await page.pause();

    //remove uploaded file
    await page.locator('#single-file').setInputFiles([]);
    await page.pause();

});


test('upload multiple files', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

    await page.locator('[id="multi-file"]').setInputFiles([
        "C:\Users\Ram\Downloads\tests-selected\googlesearch.spec.ts",
        "C:\Users\Ram\Downloads\tests-selected\locatorchain.spec.ts",
        "C:\Users\Ram\Downloads\datatypes.ts"
    ]);

    await page.pause();
});

test('upload files when type=file attribute is not available', async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');
    let [fileUpload]= await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('[id="custom-upload-btn"]').click()

    ]);

    await fileUpload.setFiles([
        "C:\Users\Ram\Downloads\tests-selected\googlesearch.spec.ts",
        "C:\Users\Ram\Downloads\tests-selected\locatorchain.spec.ts"
    ])

    await page.pause();

});