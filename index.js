// I use the selenium-webdriver package to get the primary title in web page
const getTitleInEurostep = require("./BDDtests/getTitle.js");

class ClassGetTitle {
  async getTitle() {
    return await getTitleInEurostep();
  }

  async getTitle2() {
    // I create a new instance of the Edge driver
    let driver = await new Builder()
      .forBrowser("MicrosoftEdge", "--headless")
      .build();
    try {
      // I go to the web page
      await driver.get("https://eurostep.com");
      // I find the primary title
      let headings = await driver.findElements(By.css("h2"));
      if (headings.length < 1) {
        console.log("No headings found!");
      } else {
        console.log(`Found ${headings.length} headings:`);
        // I return the primary title
        for (let heading of headings) {
          return await heading.getText();
        }
      }
    } catch (error) {
      console.log("Error: " + error);
    } finally {
      // I close the browser/driver
      await driver.quit();
    }
  }
}

// I export the ClassGetTitle to be used in step-1.js
module.exports = {
  ClassGetTitle,
};
