const employee = require("../JS/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("Should create an object with key values", () => {
      const Employ = new Employee("Eddy", 1, "E@yahoo.com");
      expect(Employ.name).toEqual("Eddy");
      expect(Employ.id).toEqual(1);
      expect(Employ.email).toEqual("E@yahoo.com");
    });

    it("should cause an error if no argument is provided", () => {
      const Employ = () => new Employee();
      expect(Employ).toThrow();
    });

    it("should cause en error if name is not a string", () => {
      const Employ = () => new Employee(25, 1, "E@yahoo.com");
      expect(Employ).toThrow();
    });
  });
});
