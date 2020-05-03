const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const api = require("./utils/api.js");
const generateMarkdown = require("./utils/generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);




function questions(){
    return inquirer.prompt([
        {
          type: "input",
          name: "username",
          message: "What is your GitHub username?"
        },
        }
          type: "input",
          name: "personalToken"
          message: "What is your GitHub personal access token?"
        },
        {
          type: "input",
          name: "title",
          message: "What is the name of your project?"
        },
        {
          type: "input",
          name: "description",
          message: "Please provide a description of your project: "
        },
        {
          type: "input",
          name: "installationCommands",
          message: "Please provide the commands needed to install your application"
        },
        {
          type: "input",
          name: "usageInstructions",
          message: "Please provide instructions for using your application: "
        },
        {
          type: "input",
          name: "usageCommands",
          message: "Please provide the command need to run your application"
        },
        {
          type: "input",
          name: "contributing",
          message: "If you created an application or package and would like other developers to contribute it, please add guidelines for how to do so"
        },
        {
          type: "input",
          name: "tests",
          message: "If you wrote tests for your application, Then provide examples on how to run them"
        },
      ]);

}








function init() {
    questions()
    .then(function(answers) {
        const readme = generateMarkdown(answers);
    
         writeFileAsync("README.md", readme);
         api.getUser(answers.username, answers.personalToken);
      })
      .then(function() {
        console.log("Successfully wrote to README.md");
        
      })
      .catch(function(err) {
        console.log(err);
      });
        
}


init();
