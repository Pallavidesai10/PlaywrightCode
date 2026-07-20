
import{test, Page, expect}from'@playwright/test'
import fs from 'fs'


let jsonPath= "tests/Practice 2/testData/data.json"

let loginData:any= JSON.parse(fs.readFileSync(jsonPath,'utf-8'));

for(let{username, password} of loginData){
    test(`json test data "${username}"`, async({page})=>{
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
        await page.getByRole('textbox',{name:'E-Mail Address'}).fill(username);
        await page.getByRole('textbox',{name:'Password'}).fill(password);
        await page.getByRole('button', {name:'Login'}).click();
       await expect(page.locator('alert alert-danger alert-dismissible')).toHaveText(' Warning: No match for E-Mail Address and/or Password.');

});
};


