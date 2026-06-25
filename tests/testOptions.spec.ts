


import{test}from'@playwright/test'


test.skip('skip test', async({})=>{
    console.log('skip test');
});

test('fail test', async({})=>{
    test.fail();             //this test is expected to fail - known bug...
    console.log('fail the test from execution');
});

test.only('title test', async({})=>{
    console.log('title test');
});

test('url test', async({})=>{
    test.fixme();    //known issue, will fix it later
    console.log('url test');
});

test('cart test', async({})=>{
    console.log('cart test');
});



//test groups: test suites ---> multiple test cases

test.describe('login test cases', ()=>{

    test('log in test', async({})=>{
        console.log('log in test');
    });

    test('forgot password test', async({})=>{
        console.log('forgot password test');
    });

});


test.describe('search related test cases', () => {

    test('search product test', async ({ }) => {
        console.log('title test');
    });

    test('search default test', async ({ }) => {
        console.log('login forgot pwd test');
    });

});






//parallel mode
//AAA
//isolation mode
//no dependency 
//independent 

//CRUD: 
//test case 1:
//create a user, id=123
//get the user, id=123
//delete the ueser, id=123
//get the user, id=123

//test case 2:
//create a user, id=123
//get the user, id=123
//update the ueser, id=123
//get the user, id=123