

import { test } from '@playwright/test';


//hooks: before(setup) and after(teardown)


//Runs ONCE before all tests in this file
test.beforeAll('before all test', async({})=>{   // Log in to DB
    console.log('Befor all');
});


//Runs BEFORE each test
test.beforeEach('before each test', async({})=>{     // log in to application
    console.log('before each test');
})


//Runs AFTER each test
test.afterEach('after each test', async({})=>{      //log out from application
    console.log('after each test');
});


//Runs ONCE after all tests in this file
test.afterAll('after all test', async({})=>{          //Log out from DB
    console.log('after all');
});


test('title test', async({})=>{
    console.log('title test');
});

test('url test', async ({ }) => {
    console.log('url test');
});

test('payment test', async ({ }) => {
    console.log('payment test');
});
