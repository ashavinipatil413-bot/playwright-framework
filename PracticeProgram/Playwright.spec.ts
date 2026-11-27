import {test, expect} from '@playwright/test';

test ('title', async ({page})=>{

await page.goto(process.env.BASE_URL!);

await page.setInputFiles('test-data/Report.pdf')
;









})





