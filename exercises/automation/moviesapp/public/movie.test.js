const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
const chromedriver = require('chromedriver');
const chrome = require('selenium-webdriver/chrome')

let driver;

beforeEach(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
  await driver.get("http://192.168.68.74:3000");
});

afterEach(async () => {
  await driver.quit();
});

/* test("can enter a new movie 'Batman'", async () => {

    await driver.findElement(By.name("movieTitle")).sendKeys("Batman", Key.RETURN);
     
    const checkbox = await driver.findElement(By.id('movie-0'))
    checkbox.click();
    const isChecked = await checkbox.isSelected();
    console.log("Checkbox is checked:", isChecked);


    await driver.findElement(By.className("delete-btn")).click();
  });
 */

test("can enter a new movie 'Batman'", async () => {
      let message = await driver.findElement(By.id("message"));
    // Enter movie title
    await driver.findElement(By.name("movieTitle")).sendKeys("Batman", Key.RETURN);
  
    // Wait for the checkbox to be clickable
    const checkbox = await driver.wait(until.elementLocated(By.id('movie-0')), 5000);
    
    // Click the checkbox
    await checkbox.click();
  
    // Check the checkbox state
    const isChecked = await checkbox.isSelected();
    console.log("Checkbox is checked:", isChecked);
    
   
    // Wait for 5 seconds (if necessary)
    // If you need to wait for an asynchronous operation, use Jest's utilities instead
    
    // Click the delete button
    await driver.findElement(By.className("delete-btn")).click();
    
    await driver.wait(until.elementTextContains(message,"deleted"));
    await driver.sleep(1000);

  });
