const Intern = require("../JS/intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("Should create an object with name, id and email", () => {
      const Int = new Intern("Eddy", 1, "E@yahoo.com");

      expect(Int.name).toEqual("Eddy");
      expect(Int.id).toEqual(1);
      expect(Int.email).toEqual("E@yahoo.com");
    });

    it("should throw an error if no arguments are not provided", () => {
      const Int = () => new Intern();
      expect(Int).toThrow();
    });

    it("should throw an error if name is not a string", () => {
      const Int = () => new Intern(1, 1, "E@yahoo.com");
      expect(Int).toThrow();
    });

    it("Should throw an error if the id is not a number", () => {
      const Int = () => new Intern("Eddy", "1", "E@yahoo.com");
      expect(Int).toThrow();
    });

    it("Should throw an error if id is a string", () => {
      const Int = () => new Intern("Eddy", -1, "E@yahoo.com");
      expect(Int).toThrow();
    });

    it("Should throw an error if an email is not an email", () => {
      const Int = () => new Intern("Eddy", 1, 123);
      expect(Int).toThrow();
    });

    describe("getName()", () => {
      it("Should return the name of the Intern", () => {
        const Int = () => new Intern("Eddy", 1, "E@yahoo.com");
        const getNam = Int.getName();
        expect(Int).toEqual("Eddy");
      });
    });

    describe("getId()", () => {
      it("Should return the id of the Intern", () => {
        const Int = () => new Intern("Eddy", 1, "E@yahoo.com");
        const Id = Int.getId();
        expect(Int).toEqual(1);
      });
    });

    describe("getEmail()", () => {
      it("Should return the email of the Intern", () => {
        const Int = () => new Intern("Eddy", 1, "E@yahoo.com");
        const email = Int.getEmail();
        expect(Int).toEqual("E@yahoo.com");
      });
    });

    describe("getRole()", () => {
      it("Should throw an error if an email is not an email", () => {
        const Int = () => new Intern("Eddy", 1, "E@yahoo.com");
        const role = Int.getRole();
        expect(Int).toEqual("Intern");
      });
    });
  });
});
