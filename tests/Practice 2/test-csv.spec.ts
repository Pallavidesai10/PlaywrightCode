
import{test, Page, expect}from'@playwright/test'
import {parse}from'csv-parse/sync'
import fs from 'fs'


//install csv parse module- npm install csv-parse

/*fs- It gives your code access to the computer's storage so you can create, read, update, or delete files and directories.

  readFileSync- By default, readFileSync reads files as raw binary data (a Buffer object looking like <Buffer ... 20 4d 79>).

  utf- Telling Node.js to use 'utf-8' automatically converts those raw bytes into a standard JavaScript string (letters, numbers, and symbols)
  so you can work with your CSV data directly as text.
*/


const csvPath= 'tests/Practice 2/testData/loginData.csv';
const csvFileData= fs.readFileSync(csvPath, 'utf-8');
const Records:any= parse(csvFileData,{columns: true, skip_empty_lines: true, trim: true});

test.describe('test data tests', async()=>{
    
for(let data of Records){
    test(`csv test username "${data.username}" and password "${data.password}"`, async({page})=>{
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        await page.getByRole('textbox',{name:'E-Mail Address'}).fill(data.username);
        //await page.waitForTimeout(3000);
        await page.locator('[id="input-password"]').fill(data.password);
        await page.getByRole('button', {name:'Login'}).click();
        const warningMessage= await page.locator('alert alert-danger alert-dismissible').innerText();
        expect(warningMessage).toContain(' Warning: No match for E-Mail Address and/or Password.');

})
};
});
