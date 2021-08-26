const Manager = require("../JS/manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("Should create an object with name, id and email", () => {
      const Mng = new Manager("Eddy", 1, "E@yahoo.com");

      expect(Mng.name).toEqual("Eddy");
      expect(Mng.id).toEqual(1);
      expect(Mng.email).toEqual("E@yahoo.com");
    });

    it("should throw an error if no arguments are not provided", () => {
      const Mng = () => new Manager();
      expect(Mng).toThrow();
    });

    it("should throw an error if name is not a string", () => {
      const Mng = () => new Manager(1, 1, "E@yahoo.com");
      expect(Mng).toThrow();
    });

    it("Should throw an error if the id is not a number", () => {
      const Mng = () => new Manager("Eddy", "1", "E@yahoo.com");
      expect(Mng).toThrow();
    });

    it("Should throw an error if id is a string", () => {
      const Mng = () => new Manager("Eddy", -1, "E@yahoo.com");
      expect(Mng).toThrow();
    });

    it("Should throw an error if an email is not an email", () => {
      const Mng = () => new Manager("Eddy", 1, 123);
      expect(Mng).toThrow();
    });

    describe("getName()", () => {
      it("Should return the name of the Manager", () => {
        const Mng = () => new Manager("Eddy", 1, "E@yahoo.com");
        const getNam = Mng.getName();
        expect(Mng).toEqual("Eddy");
      });
    });

    describe("getId()", () => {
      it("Should return the id of the Manager", () => {
        const Mng = () => new Manager("Eddy", 1, "E@yahoo.com");
        const Id = Mng.getId();
        expect(Mng).toEqual(1);
      });
    });

    describe("getEmail()", () => {
      it("Should return the email of the Manager", () => {
        const Mng = () => new Manager("Eddy", 1, "E@yahoo.com");
        const email = Mng.getEmail();
        expect(Mng).toEqual("E@yahoo.com");
      });
    });

    describe("getRole()", () => {
      it("Should throw an error if an email is not an email", () => {
        const Mng = () => new Manager("Eddy", 1, "E@yahoo.com");
        const testRole = Mng.getRole();
        expect(Mng).toEqual("Manager");
      });
    });
  });
});
