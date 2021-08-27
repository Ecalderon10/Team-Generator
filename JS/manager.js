const employee = require("./employee.js");

class Manager extends employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.name = name;
    this.id = id;
    this.email = email;
    this.officenumber = this.officenumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
