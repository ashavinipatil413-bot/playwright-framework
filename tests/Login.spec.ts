import {test, expect} from '../Fixtures/baseTest';

import users from '../test-data/users.json';

test ('Login Test',async({loginPage,page})=>{



await loginPage.open ();

await loginPage.login(users.validuser.username,users.validuser.password);

await expect(page).toHaveURL(/inventory/);
await expect(page.locator('.app_logo')).toHaveText('Swag Labs');

await page.pause();

})
