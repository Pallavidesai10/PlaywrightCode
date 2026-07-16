
import{test, Page, Locator}from'@playwright/test'

test('dynamic web table- get CPU load', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    let table= page.locator('#taskTable');
    let tableRows= await table.locator('tr').all();
    //let tableData= tableRows.locator('td');
    //await tableRows.filter({hasText:'Chrome'}).highlight();

    let cpuLoad= ''
    for( let row of tableRows){
        let Name= await row.locator('td').nth(0).isVisible();
        let processName= await row.locator('td').nth(0).innerText();

        if(processName=== 'Chrome'){
            cpuLoad= await row.locator('td').filter({hasText: '%'}).innerText();
            console.log(cpuLoad);
            break;
        }
    }

    await page.waitForTimeout(4000);

});


test('test firefox memory size', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    let table= page.locator('#taskTable');
    let rows= await table.locator('tr').all();

    for(let row of rows){
        let name= await row.locator('td').first().innerText();
        if(name=== 'Firefox'){
           let firefoxMemory= await row.locator('td', {hasText:'MB'}).innerText();
           console.log(firefoxMemory);
           break;
        }
        
    }

    
});


test('cpu loadsize size', async({page})=>{
    await page.goto('https://practice.expandtesting.com/dynamic-table');
    let table= page.locator('[class="table table-striped"]');
    let rows= await table.locator('tr').all();

    let CPULoad='';
    for(let row of rows){
        let name= await row.locator('td').first().innerText();
        if(name=== 'Chrome'){
           CPULoad= await row.locator('td', {hasText:'%'}).innerText();
           console.log(CPULoad);
           break;
        }
        
    }

    
});


