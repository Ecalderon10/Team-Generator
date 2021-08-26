const Employee = require("../JS/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("Should create an object with name, id and email", () => {
      const Employ = new Employee("Eddy", 1, "E@yahoo.com");

      expect(Employ.name).toEqual("Eddy");
      expect(Employ.id).toEqual(1);
      expect(Employ.email).toEqual("E@yahoo.com");
    });

    it("should throw an error if no arguments are not provided", () => {
      const employ = () => new Employee();
      expect(employ).toThrow();
    });

    it("should throw an error if name is not a string", () => {
      const employ = () => new Employee(1, 1, "E@yahoo.com");
      expect(employ).toThrow();
    });

    it("Should throw an error if the id is not a number", () => {
      const employ = () => new Employee("Eddy", "1", "E@yahoo.com");
      expect(employ).toThrow();
    });

    it("Should throw an error if id is a string", () => {
      const employ = () => new employee("Eddy", -1, "E@yahoo.com");
      expect(employ).toThrow();
    });

    it("Should throw an error if an email is not an email", () => {
      const employ = () => new Employee("Eddy", 1, 123);
      expect(employ).toThrow();
    });

    describe("getName()", () => {
      it("Should return the name of the employee", () => {
        const employ = () => new Employee("Eddy", 1, "E@yahoo.com");
        const getNam = employ.getName();
        expect(employ).toEqual("Eddy");
      });
    });

    describe("getId()", () => {
      it("Should return the id of the employee", () => {
        const employ = () => new Employee("Eddy", 1, "E@yahoo.com");
        const Id = employ.getId();
        expect(employ).toEqual(1);
      });
    });

    describe("getEmail()", () => {
      it("Should return the email of the employee", () => {
        const employ = () => new Employee("Eddy", 1, "E@yahoo.com");
        const email = employ.getEmail();
        expect(employ).toEqual("E@yahoo.com");
      });
    });

    describe("getRole()", () => {
      it("Should throw an error if an email is not an email", () => {
        const employ = () => new Employee("Eddy", 1, "E@yahoo.com");
        const role = employ.getRole();
        expect(employ).toEqual("Employee");
      });
    });
  });
});
