const Employee = require("../JS/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("Should create an object with name, id and email", () => {
      const Employ = new Employee("Eddy", 1, "E@yahoo.com");

      expect(Employ.name).toEqual("Eddy");
      expect(Employ.id).toEqual(1);
      expect(Employ.email).toEqual("E@yahoo.com");
    });

    describe("getName()", () => {
      it("Should return the name of the employee", () => {
        const employ = new Employee("Eddy", 1, "E@yahoo.com");
        const getNam = employ.getName();
        expect(getNam).toEqual("Eddy");
      });
    });

    describe("getId()", () => {
      it("Should return the id of the employee", () => {
        const employ = new Employee("Eddy", 1, "E@yahoo.com");
        const Id = employ.getId();
        expect(Id).toEqual(1);
      });
    });

    describe("getEmail()", () => {
      it("Should return the email of the employee", () => {
        const employ = new Employee("Eddy", 1, "E@yahoo.com");
        const email = employ.getEmail();
        expect(email).toEqual("E@yahoo.com");
      });
    });

    describe("getRole()", () => {
      it("Should throw an error if an email is not an email", () => {
        const employ = new Employee("Eddy", 1, "E@yahoo.com");
        const role = employ.getRole();
        expect(role).toEqual("Employee");
      });
    });
  });
});
