

import{test} from'@playwright/test'

test('page load state test', async ({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home', {waitUntil:'load'});

});


//page laoding states: interview
    //load: all resources(images, elements, css, scripts) loaded -- default option
    //domcontentloaded: HTML DOM is paresed, DOM is ready
    //networkidle: no network activity for 500 ms -- good?
    //commit: first response byte received from server
