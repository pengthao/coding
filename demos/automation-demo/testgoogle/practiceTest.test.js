const { By, Builder, Browser, until, Key } = require("selenium-webdriver");
const chromedriver = require('chromedriver');
const chrome = require('selenium-webdriver/chrome')

let driver;

// Build a new driver for each test
beforeEach(async () => {
  const chromeOptions = new chrome.Options();

  driver = await new Builder()
  .forBrowser(Browser.CHROME)
  .setChromeOptions(chromeOptions)  
  .build();
});

// Quit a driver after each test
afterEach(async () => {
  await driver.quit();
});

 describe("Test the Google homepage", () => {
  test("can search Google for 'Selenium'", async () => {
    // Navigate to google.com
    await driver.get("https://www.google.com/");

    // Locate the search bar and send the search term to it
    await driver.findElement(By.name("q")).sendKeys("selenium", Key.RETURN);
    // Wait until the title of the page changes to include the search term
    await driver.wait(until.titleIs("selenium - Google Search"), 1000);
  }); 

  describe("Test the Google homepage", () => {
    test("can search Google for 'Selenium'", async () => {
      // Navigate to google.com
      await driver.get("https://www.google.com/");
  
      // Locate the search bar and send the search term to it
      await driver.findElement(By.name("q")).sendKeys("puppies", Key.RETURN);
      // Wait until the title of the page changes to include the search term


      await driver.wait(until.titleIs("puppies - Google Search"), 1000);

      await driver
      .findElement(By.linkText('Images'))
        .click();
      // Wait until the title of the page changes to include the search term

        });
    });
 });  
