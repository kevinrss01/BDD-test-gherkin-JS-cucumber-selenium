// If 'npm run report'
const reporter = require("cucumber-html-reporter");
const fs = require("fs");
if (process.env.npm_lifecycle_event === "report") {
  // I display the report of the last test
  const options = {
    theme: "bootstrap",
    jsonFile: "report/cucumber_report.json",
    output: "report/cucumber_report.html",
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
  };

  reporter.generate(options);

  fs.writeFile("report/cucumber_report.json", "", function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("cucumber_report.json file is empty");
    }
  });
}
