const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("../JS/engineer");
const Manager = require("../JS/Manager");
const Intern = require("../JS/Intern");
const { finished } = require("stream");

const htmlrequest = [];
const membersarray = [];
let spec;
let cardGenHtml = "";

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
      membersarray.push(newManager);

      if (
        managerAnswers.nextMember === "No other team members are neccassary"
      ) {
        cardGenerator();
      } else if (managerAnswers.nextMember === "Intern") {
        internQuestions();
      } else if (managerAnswers.nextMember === "Engineer") {
        engineerQuestions();
      } else {
        managerQuestions();
      }
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
    .then((EngineerAnswers) => {
      console.log(EngineerAnswers);
      //generateHtml();
      const newEngineer = new Engineer(
        EngineerAnswers.engineerName,
        EngineerAnswers.engineerId,
        EngineerAnswers.engineerEmail,
        EngineerAnswers.engineerUser
      );
      membersarray.push(newEngineer);

      if (
        EngineerAnswers.nextMember === "No other team members are neccassary"
      ) {
        cardGenerator();
      } else if (EngineerAnswers.nextMember === "Manager") {
        managerQuestions();
      } else if (EngineerAnswers.nextMember === "Intern") {
        internQuestions();
      } else {
        engineerQuestions();
      }
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
        InternAnswers.internName,
        InternAnswers.internId,
        InternAnswers.internEmail,
        InternAnswers.internSchool
      );
      membersarray.push(newIntern);

      if (InternAnswers.nextMember === "No other team members are neccassary") {
        cardGenerator();
      } else if (InternAnswers.nextMember === "Manager") {
        managerQuestions();
      } else if (InternAnswers.nextMember === "Engineer") {
        engineerQuestions();
      } else {
        internQuestions();
      }
    });
}

function cardGenerator() {
  console.log(membersarray);
  membersarray.map((answers) => {
    if (answers.getRole() === "Engineer") {
      spec = `Github: <a href="${answers.getGitHub()}>"${answers.getGitHub()}</a>`;
    } else if (answers.getRole() === "Manager") {
      spec = `Office Number: ${answers.getOfficeNumber()}`;
    } else {
      spec = `School: ${answers.getSchool()}`;
    }

    cardGenHtml += `
    <div class="card">
    <section class="card-body">
      <h5 class="card-title">Team Member</h5>
        <p class="card-text">
          <ul>
            <li>${answers.getName()}</li>
            <li>${answers.getRole()}</li>
            <li>${answers.getId()}</li>
            <li>${answers.getEmail()}</li>
            <li>${spec}</li>
          </ul>
        </p>
    </section>
    </div>
    
    `;
  });
  generateHtml();
}

function generateHtml() {
  fs.appendFile("index.html", cardGenHtml, (err) => {
    err ? console.log("error") : console.log(`success`);
  });
  allDone();
}

function allDone() {
  const finalCode = `</div>
</body>
</html>
`;
  fs.appendFile("index.html", finalCode, (err) => {
    err ? console.log("error") : console.log(`success`);
  });
}

initiateQuestions();
