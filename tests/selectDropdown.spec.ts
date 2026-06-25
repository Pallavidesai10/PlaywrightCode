import {test} from '@playwright/test'


test('select single value from dropdown', async({page})=>{
    await page.goto('https://orangehrm.com/contact-sales');

    await page.getByRole('combobox', {name: 'Country'}).selectOption('Bahamas');// select direct option from dropdown

    await page.getByRole('combobox', {name:'Country'}).selectOption({label: 'Canada'})// visible text
   
    await page.waitForTimeout(3000);
    
    await page.getByRole('combobox', {name:'No Of Employees'}).selectOption('11 - 50');

    await page.waitForTimeout(3000);

    await page.getByRole('combobox', {name: 'Country'}).selectOption({value: 'Germany'}); // select by value

    await page.getByRole('combobox', {name: 'Country'}).selectOption({index: 20});

    let currentSelectedCountry: string= await page.getByRole('combobox', {name: 'Country'}).inputValue();
    console.log(currentSelectedCountry);


    await page.pause();
});



test('multiselect dropndown', async({page})=>{
    await page.goto('https://demo.mobiscroll.com/select/multiple-select');

    await page.locator('[id="multiple-select-input"]').selectOption([`Books`, "Movies, Music & Games", `Health & Beauty`])
    //await page.getByRole('textbox', {name: 'Multi-select Please select...', exact: true}).selectOption([`Books`, `Movies, Music & Games`, `Health & Beauty`]);

    await page.pause();
});

test('multiple option select', async({page})=>{

    await page.goto('https://selenium08.blogspot.com/2019/11/dropdown.html');

    await page.getByRole('listbox', {name: 'Month'}).selectOption(['January', 'October', 'November']);

    await page.pause();
})