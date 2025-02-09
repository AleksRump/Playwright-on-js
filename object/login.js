exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.Email_textbox = page.getByLabel('Email *')
        this.Password_textbox = page.getByLabel('Password *')
        this.Sign_In_button = page.getByRole('button', { name: 'Sign In' })
        this.power_settings_new_button = page.getByRole('button', { name: 'power_settings_new' })
        this.Log_Out_button = page.getByRole('button', { name: 'Log Out' })

    }

    async gotoLoginPage() {
        await this.page.goto('http://ask-int.portnov.com/#/login');
    }

    async login(Email, Password) {
        await this.Email_textbox.fill(Email)
        await this.Password_textbox.fill(Password)
        await this.Sign_In_button.click()

    }
    async logout() {
        //не могу что бы нажал на эту иконку вызода
        await this.power_settings_new_button.click();
        await this.Log_Out_button.click()
    }

}