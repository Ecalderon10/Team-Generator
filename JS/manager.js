const employee = require("./employee.js");

class Employee extends employee {
  constructor(name, id, email, officeNumber) {
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

    if (typeof id !== "number" || isNaN(id) || officeNumber < 0) {
      throw new Error(
        "Expected parameter 'officeNumber' to be a non-negative number"
      );
    }

    this.name = name;
    this.id = id;
    this.email = email;
    this.officenumber = this.officenumber;
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
  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "manager";
  }
}
module.exports = Manager;
