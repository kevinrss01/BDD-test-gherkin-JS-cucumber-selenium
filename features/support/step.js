//Package to compare the expected result with the actual result
const assert = require("assert");
// Call the Cucumber library to use the When, Then and setDefaultTimeout functions
const { When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
//By default, Cucumber timeouts after 5 secondes. I have set it to 10 seconds.
setDefaultTimeout(10000);

// I import the ClassGetTitle from index.js
const { ClassGetTitle } = require("../../index");

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
