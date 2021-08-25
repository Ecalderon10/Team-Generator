const employee = require("../JS/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("Should create an object with key values", () => {
      const Employ = new Employee("Eddy", 1, "E@yahoo.com");
      expect(Employ.name).toEqual("Eddy");
      expect(Employ.id).toEqual(1);
      expect(Employ.email).toEqual("E@yahoo.com");
    });
  });
});
