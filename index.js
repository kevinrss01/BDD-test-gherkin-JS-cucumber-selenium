class ClassGetTitle {
  async getTitle() {
    const { Builder, By, Key, until } = require("selenium-webdriver");

    let driver = await new Builder()
      .forBrowser("MicrosoftEdge", "--headless")
      .build();
    try {
      await driver.get("https://eurostep.com");
      let headings = await driver.findElements(By.css("h1"));
      if (headings.length < 1) {
        console.log("No headings found!");
      } else {
        console.log(`Found ${headings.length} headings:`);
        for (let heading of headings) {
          return await heading.getText();
        }
      }
    } catch (error) {
      console.log("Error: " + error);
    } finally {
      await driver.quit();
    }
  }
}

module.exports = {
  ClassGetTitle,
};
