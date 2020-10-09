import { by, element, ElementFinder } from 'protractor';

export class Home {
    btnCustomerLogin: ElementFinder;
    btnManagerLogin: ElementFinder;

    constructor() {
        this.btnCustomerLogin = element(by.buttonText("Customer Login"));
        this.btnManagerLogin = element(by.xpath("//button[text()='Bank Manager Login']"));
    }
}