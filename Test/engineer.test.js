const Engineer = require("../JS/engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("Should create an object with name, id and email", () => {
      const eng = new Engineer("Eddy", 1, "E@yahoo.com");

      expect(eng.name).toEqual("Eddy");
      expect(eng.id).toEqual(1);
      expect(eng.email).toEqual("E@yahoo.com");
    });

    it("should throw an error if no arguments are not provided", () => {
      const eng = () => new engee();
      expect(eng).toThrow();
    });

    it("should throw an error if name is not a string", () => {
      const eng = () => new Engineer(1, 1, "E@yahoo.com");
      expect(eng).toThrow();
    });

    it("Should throw an error if the id is not a number", () => {
      const eng = () => new Engineer("Eddy", "1", "E@yahoo.com");
      expect(eng).toThrow();
    });

    it("Should throw an error if id is a string", () => {
      const eng = () => new Engineer("Eddy", -1, "E@yahoo.com");
      expect(eng).toThrow();
    });

    it("Should throw an error if an email is not an email", () => {
      const eng = () => new Engineer("Eddy", 1, 123);
      expect(eng).toThrow();
    });

    describe("getName()", () => {
      it("Should return the name of the Engineer", () => {
        const eng = () => new Engineer("Eddy", 1, "E@yahoo.com");
        const getNam = eng.getName();
        expect(eng).toEqual("Eddy");
      });
    });

    describe("getId()", () => {
      it("Should return the id of the Engineer", () => {
        const eng = () => new Engineer("Eddy", 1, "E@yahoo.com");
        const Id = eng.getId();
        expect(eng).toEqual(1);
      });
    });

    describe("getEmail()", () => {
      it("Should return the email of the Engineer", () => {
        const eng = () => new Engineer("Eddy", 1, "E@yahoo.com");
        const email = eng.getEmail();
        expect(eng).toEqual("E@yahoo.com");
      });
    });

    describe("getRole()", () => {
      it("Should throw an error if an email is not an email", () => {
        const eng = () => new Engineer("Eddy", 1, "E@yahoo.com");
        const role = eng.getRole();
        expect(eng).toEqual("Engineer");
      });
    });
  });
});
