const assert = require("assert");
const { When, Then } = require("@cucumber/cucumber");

const { ClassGetTitle } = require("../../index");

When("I called the secondary title", async function () {
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
