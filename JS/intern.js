const employee = require("./employee.js");

class Intern extends employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    if (typeof name !== "string" || !name.trim().length) {
      throw new Error("Expect parameter 'name' to be a non-empty string");
    }

    if (typeof id !== "number" || isNaN(id) || id < 0) {
      throw new Error("Expected parameter 'id' to be a non-negative number");
    }

    if (validator.isEmail(email) == false) {
      throw new Error("Expected parameter 'email' to be a non-empty string");
    }

    if (typeof school !== "string" || !school.trim().length) {
      throw new Error("Expect parameter 'school' to be a non-empty string");
    }

    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
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

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}
module.exports = Intern;
