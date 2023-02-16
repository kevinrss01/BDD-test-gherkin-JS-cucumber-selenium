// I use the selenium-webdriver package to get the primary title in web page
const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const options = new chrome.Options();
options.excludeSwitches(["enable-logging"]);

//Package to compare the expected result with the actual result
const readline = require("readline");
const util = require("util");
// Create a new readline interface to read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = util.promisify(rl.question).bind(rl);

const driver = new Builder()
  .forBrowser("chrome", "--headless")
  .setChromeOptions(options)
  .build();

class ClassBDDtests {
  async fillLoginInput() {
    const username = await question("Please enter your email: ");
    const password = await question("Please enter your password: ");

    // Navigate to the ShareAspace login page
    await driver.get(
      "https://esaz924.eurostep.com/IdentityServer/Account/SignIn?ReturnUrl=%2FIdentityServer%2Fissue%2Fwsfed%3Fwa%3Dwsignin1.0%26wtrealm%3Durn%253asas%253aauthorization%26wctx%3Drm%253d0%2526id%253dpassive%2526ru%253d%25252fAuthorizationServer%25252fsasweb%25252foauth%25252fauthorize%25253fclient_id%25253dNovaWeb%252526redirect_uri%25253dhttps%25253a%25252f%25252fesaz924.eurostep.com%25252fsasweb%25252fCallback.html%252526response_type%25253dcode%252526scope%25253dAll%252526state%25253deyJjcCI6Imh0dHBzOi8vZXNhejkyNC5ldXJvc3RlcC5jb20vSWRlbnRpdHlTZXJ2ZXIvQWNjb3VudC9DaGFuZ2VQYXNzd29yZD9jbGllbnRfaWQ9Tm92YVdlYiZyZWRpcmVjdF91cmk9aHR0cHM6Ly9lc2F6OTI0LmV1cm9zdGVwLmNvbS9zYXN3ZWIvQ2FsbGJhY2suaHRtbCZyZXNwb25zZV90eXBlPWNvZGUmc2NvcGU9QWxsJnN0YXRlPWFIUjBjSE02THk5bGMyRjZPVEkwTG1WMWNtOXpkR1Z3TG1OdmJTOUpaR1Z1ZEdsMGVWTmxjblpsY2k5QlkyTnZkVzUwTDBOb1lXNW5aVkJoYzNOM2IzSmsmbm9uY2U9MTY3NjM4MDQwNTI2OCZjb2RlX2NoYWxsZW5nZT1HR2dzeWtSZnA3LVZYaWVINmxpcEIwSWVxNmJISldBM0YxeEVmT1l1c3BNJmNvZGVfY2hhbGxlbmdlX21ldGhvZD1TMjU2IiwicHUiOiJodHRwczovL2VzYXo5MjQuZXVyb3N0ZXAuY29tL3Nhc3dlYi8jLyJ9%252526nonce%25253d1676380405268%252526code_challenge%25253dGGgsykRfp7-VXieH6lipB0Ieq6bHJWA3F1xEfOYuspM%252526code_challenge_method%25253dS256%26wct%3D2023-02-14T13%253a13%253a25Z"
    );

    // Find the input fields for the username and password
    const formControls = await driver.findElements(
      By.className("form-control")
    );

    // Get the first two elements and fill in the input fields with your login credentials
    const usernameInput = formControls[0];
    const passwordInput = formControls[1];
    await usernameInput.sendKeys(username);
    await passwordInput.sendKeys(password, Key.RETURN);
  }

  async verifyHomePage() {
    // Wait for the login process to complete and verify that you are on the home page
    await driver.wait(
      until.urlContains("https://esaz924.eurostep.com/sasweb/#/"),
      5000
    );

    driver.quit();
  }
}

// I export the ClassGetTitle
module.exports = {
  ClassBDDtests,
};
