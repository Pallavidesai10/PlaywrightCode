
import{test, Page}from'@playwright/test'


test('date picker 1', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
     await page.locator('[id="datepicker"]').click();

     let currentMonth= await page.locator('[class="ui-datepicker-month"]').textContent();
     let currentYear= await page.locator('[class="ui-datepicker-year"]').textContent();

     let currentMonthYear= `${currentMonth?.trim()} ${currentYear?.trim()}`;

     console.log(currentMonthYear);

     let expectMonthYear= 'January 2027'

     while(true){

        if(currentMonthYear===expectMonthYear){
            await page.getByRole('link', {name: '8', exact: true}).click();
            break;
        }

        else{
            await page.getByText('Next').click();
            let currentMonth= await page.locator('[class="ui-datepicker-month"]').textContent();
            let currentYear= await page.locator('[class="ui-datepicker-year"]').textContent();

            currentMonthYear= `${currentMonth?.trim()} ${currentYear?.trim()}`;


        }
     }
});


test('date picker 2', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('[id="txtDate"]').click();

    let currentmonth= await page.getByRole('combobox', {name: 'Select month'}).textContent();
    let currentyear= await page.getByRole('combobox',{name: 'Select year'}).textContent();

    let currentMonthAndYear= `${currentmonth?.trim()} ${currentyear?.trim()}`;

    let expectedMonthAndYear= 'Jul 2026'

    
        if(currentMonthAndYear===expectedMonthAndYear){
            await page.getByRole('link', {name: '8', exact: true}).click();
            
        }

        else{
            await page.getByRole('combobox', {name: 'Select month'}).selectOption({label:'Nov'});
            await page.getByRole('combobox',{name: 'Select year'}).selectOption('2026');
            await page.getByRole('link', {name: '8', exact: true}).click();
        }


        await page.pause();
});


test('date picker 3', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByPlaceholder('Start Date').click();

    await page.pause();

})