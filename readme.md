# Test BDD (Behavior Driven Development)

## What are BDD tests and Gherkin language?

BDD, or Behavior-Driven Development, is a software development methodology that focuses on understanding the behavior of a system before writing code. The goal is to build software that meets the requirements of stakeholders and can be easily tested.

Gherkin is a plain-text language used to write BDD tests. It's designed to be simple and easy to understand for everyone involved in the development process, including non-technical stakeholders. Gherkin tests are written in a structured format, following the keywords "Given", "When", and "Then".

For example, a Gherkin test might look like this:

`Given the user is on the login page`

`When the user enters their credentials`

`Then the user should be directed to the home page.`

By using Gherkin and BDD, teams can ensure that they are building software that meets the needs of stakeholders and can be easily tested. The structured format of Gherkin tests makes it easy to create, modify, and maintain tests, even as requirements change.

## What is cumcumber.js?

Cucumber.js is a JavaScript implementation of the Cucumber testing framework. It provides a way to write tests in a way that is easily understandable by both technical and non-technical people.  
Cucumber.js works by matching the test scenarios written in Gherkin with JavaScript code that implements those scenarios.  
This allows for the tests to be easily maintainable and understandable by the entire team, including stakeholders and business representatives. Additionally, cucumber.js integrates well with other testing tools, making it a popular choice for Behavior Driven Development (BDD) in JavaScript projects.

## Installation and test execution

### Installation

1. Install Node.js and npm if you haven't already. You can download them from https://nodejs.org/en/. You can check if you have them installed by running the following commands in your terminal:

`node -v`

2. Make sure you have installed git on your machine. You can download it from https://git-scm.com/downloads.

3. Put yourself in the folder where you want to clone the project and run the following command with your terminal or download the zip file to your local machine :

`git clone https://github.com/kevinrss01/BDD-test-gherkin-JS-cucumber-selenium`

4. Open the project in VS Code or your preferred code editor.  
   Open the terminal and if you haven't installed cucumber.js yet, run the following command:

`npm install -g cucumber`

5. Run the following command to install the necessary dependencies:

`npm install`

6. Once all dependencies have been installed, if you want to see the result in the console you can run the following command to execute the tests:

`npm run test`

7. If you want to see the result in the HTML report, run the following command _(You must execute npm run test first)_:

`npm run report`
