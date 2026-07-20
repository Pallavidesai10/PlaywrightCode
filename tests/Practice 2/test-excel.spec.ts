
import{test, Page, expect}from'@playwright/test'
import xlxs from 'xlsx'

// npm install xlsx

//excel-- workbook-- worksheet-- row and columns


const excelPath= 'tests/Practice 2/testData/OpenCartInvalidLoginData.xlsx';

const excelFile= xlxs.readFile(excelPath)
const SheetNames= excelFile.SheetNames[0]
const worksheet=excelFile.Sheets[SheetNames];


//convert sheet into json

let loginData:any= xlxs.utils.sheet_to_json(worksheet);
test.describe('excel test', async()=>{
    
for(let{username, password} of loginData){
    test(`json test data ${username}`, async({page})=>{
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        await page.getByRole('textbox',{name:'E-Mail Address'}).fill(username);
        await page.getByRole('textbox',{name:'Password'}).fill(password);
        await page.getByRole('button', {name:'Login'}).click();
        let loginWarning= await page.locator('alert alert-danger alert-dismissible').innerText();
        expect(loginWarning).toContain(' Warning: No match for E-Mail Address and/or Password.');

});
};
})
