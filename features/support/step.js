//Package to compare the expected result with the actual result
const assert = require("assert");
// I import the cucumber-html-reporter package to generate the report
const reporter = require("cucumber-html-reporter");
// Call the Cucumber library to use the When, Then and setDefaultTimeout functions
const { When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
//By default, Cucumber timeouts after 5 secondes. I have set it to 10 seconds.
setDefaultTimeout(10000);
const fs = require("fs");


// I import the ClassGetTitle from index.js
const { ClassGetTitle } = require("../../index.js");

When("I looking for the primary title", async function () {
  this.words = await new ClassGetTitle().getTitle();
});

Then("I should see {string}", function (expectedResponse) {
  assert.equal(
    this.words,
    expectedResponse,
    "The secondary title is not correct"
  );

  console.log("The secondary title is: " + this.words);
});



console.log(process.env.npm_lifecycle_event)

// Function to display the report if npm test is used
if (process.env.npm_lifecycle_event === 'report') {
  const options = {
    theme: "bootstrap",
    jsonFile: "report/cucumber_report.json",
    output: "report/cucumber_report.html",
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
  };

  reporter.generate(options);
  fs.writeFileSync("report/cucumber_report.json", "");
}



