

import{test}from'@playwright/test'

test('calendar test', async({page})=>{
    await page.goto('http://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html');

    await page.locator('#datepicker').click();
    let currentMonth= await page.locator('span.ui-datepicker-month').textContent();
    let currentYear= await page.locator('span.ui-datepicker-year').textContent();

    let currentMonthYear= `${currentMonth?.trim()} ${currentYear?.trim()}`
    console.log(currentMonthYear);

    let expectMonthYear= 'November 2030';

    while(true){
        if(currentMonthYear===expectMonthYear){
            await page.getByRole('link', {name:'8', exact:true}).click();
            break;
        }

        else{
            await page.getByText('Next').click();
            //await page.waitForTimeout(500);
            let currentMonth= await page.locator('span.ui-datepicker-month').textContent();
            let currentYear= await page.locator('span.ui-datepicker-year').textContent();
            currentMonthYear= `${currentMonth?.trim()} ${currentYear?.trim()}`
            console.log(currentMonthYear);


        }

    }

    await page.pause();

});