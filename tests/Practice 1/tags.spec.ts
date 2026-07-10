
import{test}from'@playwright/test'


test('login test @sanity', async({})=>{
    console.log('login test');
});

test('title test @sanity @regression', async ({ }) => {
    console.log('title test');
});

test('url test @regression', async({})=>{
    console.log('url test');
});


test('payment test @sanity @P1', async ({ }) => {
    console.log('payment test');
});


//Pw 1.45+ onwards:

test('cart test', {tag: ['@sanity', '@regression', '@e2e']}, async({})=>{
    console.log('cart test');

});

test('home page test', {tag: ['@sanity', '@p1', '@regression']}, async({})=>{
    console.log('home page test');
});

//annotations: some extra information I want to add 

test('bag test',{
    tag:['@Sanity', '@regression'],
    annotation:[
        {type: 'issue', description: 'item not display- jira ID'},
        {type: 'flaky', description:'test failing frequently'}
    ]
},
    async({})=>{

        console.log('bag test with tag and annotation');

    });