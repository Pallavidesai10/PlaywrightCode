

import {test, expect}from'@playwright/test'


//wait, sync, element present, glitch, page issue, browser issue


test.describe('search related test cases', ()=>{
    test.describe.configure({retries: 2, mode: 'parallel'});

    test('search product test', async ({ }) => {
            console.log('search product test');
        });
    
        test('search default test', async ({ }) => {
            console.log('default search test');
        });
});


test('search test', async ({ }) => {
    test.describe.configure({retries:1, mode:'serial'});
    console.log('search test');
    expect(1).toBe(2);
});