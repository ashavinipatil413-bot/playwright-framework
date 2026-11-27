import {Page,Locator} from '@playwright/test'

export class LoginPage{

    readonly page: Page;
    readonly username : Locator;
    readonly password :Locator;
    readonly loginButton : Locator;

constructor (page: page){

this.page=page
this. username=page.locator('#user-name');
this.password=page.locator('#password');
this.loginButton=page.getByRole('button', {name :'Login'});

}
async open (){



    await this.page.goto('https://www.saucedemo.com/');

}

async login(user:string,pass:string){


    await this.username.fill(user);
    await this .password.fill(pass);
 
    await this.page.waitForTimeout(3000);   // wait 3 seconds

    await this.loginButton.click();
}


}

