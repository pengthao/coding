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

  await driver.get('http://localhost:3000');
});

// Quit a driver after each test
afterEach(async () => {
  await driver.quit();
});

/* describe("automation", () => {
    test("users can add a movie to the list", async () => {
        await driver.get('http://localhost:3000')
        await driver.findElement(By.name("movieTitle"))
        .sendKeys("batman", Key.RETURN);
        //driver.sleep(4000);
        await driver.findElement(By.css('label[for="movie-0"]')) */



describe("automation", () => {
    test("users can add a movie to the list", async () => {
        // Wait for the element to be present before interacting with it
        const movieTitleInput = await driver.wait(until.elementLocated(By.name("movieTitle")), 2000);

        // Interact with the element
        await movieTitleInput.sendKeys("batman", Key.RETURN);
    });
});
