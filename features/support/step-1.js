const { When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
//By default, Cucumber timeouts after 5 secondes. I have set it to 10 seconds.
setDefaultTimeout(60000);

if (process.env.npm_lifecycle_event === "test") {
  const { ClassBDDtests } = require("../../index.js");

  When("I enter my login credentials and click on enter", async function () {
    await new ClassBDDtests().fillLoginInput();
  });

  Then("I am redirected to the ShareAspace home page", async function () {
    await new ClassBDDtests().verifyHomePage();
  });
}
