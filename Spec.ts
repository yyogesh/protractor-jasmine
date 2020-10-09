import { element, browser, by } from 'protractor';
import { Home } from './PageObjects/HomePage';

let objHome = new Home();

describe("Test suite", () => {
    it('test case 1', async function () {
        await browser.get("http://way2automation.com/angularjs-protractor/banking/#/login");
        // browser.get("https://juliemr.github.io/protractor-demo/");
        await browser.driver.manage().window().maximize();
        await objHome.btnManagerLogin.click();
        //  await element(by.xpath("//button[text()='Bank Manager Login']")).click();
        browser.sleep(5000);
        await element(by.xpath("//button[@ng-class='btnClass1']")).click();
        browser.sleep(5000);
        element(by.model("fName")).sendKeys("Test1");
        element(by.model("lName")).sendKeys("test2");
        element(by.model("postCd")).sendKeys("12334");
        element(by.xpath("//button[@type='submit']")).click();
        browser.sleep(5000);
        (await browser.switchTo().alert()).getText().then((text) => {
            expect(text).toContain("Customer added successfully with customer id");
            browser.switchTo().alert().accept();
            browser.sleep(5000);
            console.log(text);
        })
    })
});