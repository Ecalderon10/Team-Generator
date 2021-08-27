const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("../JS/engineer");
const Manager = require("../JS/Manager");
const Intern = require("../JS/Intern");

const htmlrequest = [];

initiateQuestions = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employType",
        messages: "which type of employee would you like to start?",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "I would not like to add anymore team members",
        ],
      },
    ])
    .then((response) =>
      response.employType === "Manager"
        ? managerQuestions()
        : response.employType === "Engineer"
        ? engineerQuestions()
        : response.employType === "Intern"
        ? internQuestions()
        : console.log("error")
    );
};

function managerQuestions() {
  inquirer
    .prompt([
      //   {
      //     type: "string",
      //     message: `What is the ${roles[currentRole].role}'s email address?`,
      //     name: "email",
      //     validate: (answer) => {
      //       const pass = answer.match(/\S+@\S+\.\S+/);
      //       if (pass) {
      //         return true;
      //       }
      //       return "Enter a valid email address.";
      //     },
      //   },

      //   {
      //     type: "string",
      //     message: `What is the ${roles[currentRole].role}'s ${roles[currentRole].special}?`,
      //     name: "special",
      //     validate: (answer) => {
      //       if (currentRole === 0 && isNaN(answer)) {
      //         return "Office Number must be a number";
      //       }
      //       return true;
      //     },
      //  },

      {
        type: "input",
        name: "managerName",
        message: "What is the name of your Manager?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What would you like your ID to be?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your Email?",
      },
      {
        type: "input",
        name: "mangerOfficeNumber",
        message: "What is your office number?",
      },
      {
        type: "list",
        name: "nextMember",
        message: "Would you like to add another team member?",
        choices: [
          "Manager",
          "Intern",
          "Engineer",
          "No other team members are neccassary",
        ],
      },
    ])
    .then((managerAnswers) => {
      //console.log(managerAnswers);
      //generateHtml();
      const newManager = new Manager(
        managerAnswers.managerName,
        managerAnswers.managerId,
        managerAnswers.managerEmail,
        managerAnswers.managerOffice
      );
      htmlrequest.push(newManager);
    });
}

function engineerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the name of your Engineer?",
      },
      {
        type: "input",
        name: "enginnerId",
        message: "What would you like your ID to be?",
      },
      {
        type: "input",
        name: "enginnerEmail",
        message: "What is your Email?",
      },
      {
        type: "input",
        name: "engineerGitUser",
        message: "What is your Github account?",
      },
      {
        type: "list",
        name: "nextMember",
        message: "Would you like to add another team member?",
        choices: [
          "Manager",
          "Intern",
          "Engineer",
          "No other team members are neccassary",
        ],
      },
    ])
    .then((engineerAnswers) => {
      console.log(engineerAnswers);
      //generateHtml();
      const newEngineer = new Engineer(
        engineerAnswers.engineerName,
        engineerAnswers.engineerId,
        engineerAnswers.engineerEmail,
        engineerAnswers.engineerUser
      );
      htmlrequest.push(newEngineer);
    });
}

function internQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the name of your Intern?",
      },
      {
        type: "input",
        name: "internId",
        message: "What would you like your ID to be?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is your Email?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What school do you currently attend?",
      },
      {
        type: "list",
        name: "nextMember",
        message: "Would you like to add another team member?",
        choices: [
          "Manager",
          "Intern",
          "Engineer",
          "No other team members are neccassary",
        ],
      },
    ])
    .then((InternAnswers) => {
      console.log(InternAnswers);

      const newIntern = new Intern(
        internAnswers.internName,
        internAnswers.internId,
        internAnswers.internEmail,
        internAnswers.internSchool
      );
      htmlrequest.push(newIntern);
    });
}

function generateHtml() {
  fs.writeFile("index.html", htmlrequest, (err) => {
    err ? console.log("error") : console.log(`success`);
  });
}

initiateQuestions();
