const employee = require("./employee.js");

class Engineer extends employee {
  constructor(name, id, email, gitUser) {
    super(name, id, email);

    this.gitUser = gitUser;
  }

  getGitHub() {
    return `https://github.com/${this.gitUser}`;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
