const employee = require("./employee.js");

class Intern extends employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}
module.exports = Intern;
