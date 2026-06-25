
import { test } from '@playwright/test';

test('image locator test', async({page})=>{
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.getByAltText(`naveenopencart`).highlight();
    await page.waitForTimeout(5000);
    await page.getByAltText(`naveenopencart`).click();
});