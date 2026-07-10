

import{Frame, FrameLocator, test} from '@playwright/test'


test('iframe test', async({page})=>{
    await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/');
    await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click();//image
    let iframeLocator: FrameLocator= page.frameLocator('[id=frame-one748593425]');// iframe locator
    await iframeLocator.getByRole('textbox', {name:'Proposal title *'}).fill('test');
    await iframeLocator.getByRole('textbox',{name:'Location'}).fill('NY');

    await page.pause();


});

test('frame heading test', async({page})=>{
    await page.goto('https://www.londonfreelance.org/courses/frames/index.html');
    let h2= await page.frameLocator('[name="main"]').getByRole('heading', {level:2}).innerText();
    console.log(h2);

    let h3= await page.frameLocator('[name="main"]').getByRole('heading',{level:3}).innerText();
    console.log(h3);

    let h1= await page.frameLocator('[name="content"]').getByRole('heading', {level:1}).innerText();
    console.log(h1);

    await page.pause();
});



test('total number of frames on page', async({page})=>{
    await page.goto('https://www.londonfreelance.org/courses/frames/index.html');
    let totalFrames:Frame[]= page.frames();
    let NoOfFrames= totalFrames.length;
    console.log(NoOfFrames);

    for(let fr of totalFrames){
        let frameName= fr.name();
        let frameURL= fr.url();
        console.log(frameName,':',frameURL);
}
});


test('nested iframe test', async({page})=>{

    await page.goto('https://www.dezlearn.com/nested-iframes-example/');
    let parentFrame= page.frameLocator('[id="parent_iframe"]');
    let childFrame= parentFrame.frameLocator('[id="iframe1"]');

   await childFrame.getByRole('button',{name:'Click Here'}).click();
   await parentFrame.getByRole('button',{name:'Click Here'}).click();
});