const Intern = require("../JS/intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("Should create an object with name, id and email", () => {
      const Int = new Intern("Eddy", 1, "E@yahoo.com");

      expect(Int.name).toEqual("Eddy");
      expect(Int.id).toEqual(1);
      expect(Int.email).toEqual("E@yahoo.com");
    });

    describe("getName()", () => {
      it("Should return the name of the Intern", () => {
        const Int = new Intern("Eddy", 1, "E@yahoo.com");
        const getNam = Int.getName();
        expect(getNam).toEqual("Eddy");
      });
    });

    describe("getId()", () => {
      it("Should return the id of the Intern", () => {
        const Int = new Intern("Eddy", 1, "E@yahoo.com");
        const Id = Int.getId();
        expect(Id).toEqual(1);
      });
    });

    describe("getEmail()", () => {
      it("Should return the email of the Intern", () => {
        const Int = new Intern("Eddy", 1, "E@yahoo.com");
        const email = Int.getEmail();
        expect(email).toEqual("E@yahoo.com");
      });
    });

    describe("getRole()", () => {
      it("Should throw an error if an email is not an email", () => {
        const Int = new Intern("Eddy", 1, "E@yahoo.com");
        const role = Int.getRole();
        expect(role).toEqual("Intern");
      });
    });
  });
});
