const employee = require("./employee.js");

class Engineer extends employee {
  constructor(name, id, email, gitUser) {
    super(name, id, email);

    if (typeof name !== "string" || !name.trim().length) {
      throw new Error("Expect parameter 'name' to be a non-empty string");
    }

    if (typeof gitUser !== "string" || !gitUser.trim().length) {
      throw new Error("Expected parameter 'gitUser' to be a non-empty string");
    }
    if (typeof id !== "number" || isNaN(id) || id < 0) {
      throw new Error("Expected parameter 'id' to be a non-negative number");
    }

    if (validator.isEmail(email) == false) {
      throw new Error("Expected parameter 'email' to be a non-empty string");
    }

    this.name = name;
    this.id = id;
    this.email = email;
    this.gitUser = gitUser;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getGitHub() {
    return `https://github.com/${this.gitUser}`;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
