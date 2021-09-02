const Engineer = require("../JS/engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("Should create an object with name, id, email, Github", () => {
      const eng = new Engineer("Bob", 123, "B@yahoo.com");

      expect(eng.name).toEqual("Bob");
      expect(eng.id).toEqual(123);
      expect(eng.email).toEqual("B@yahoo.com");
    });

    describe("getName()", () => {
      it("Should return the name of the Engineer", () => {
        const eng = new Engineer("Bob", 123, "B@yahoo.com");
        const getNam = eng.getName();
        expect(getNam).toEqual("Bob");
      });
    });

    describe("getId()", () => {
      it("Should return the id of the Engineer", () => {
        const eng = new Engineer("Bob", 123, "B@yahoo.com","Bob10");
        const Id = eng.getId();
        expect(Id).toEqual(123);
      });
    });

    describe("getEmail()", () => {
      it("Should return the email of the Engineer", () => {
        const eng = new Engineer("Bob", 123, "B@yahoo.com","Bob10");
        const email = eng.getEmail();
        expect(email).toEqual("B@yahoo.com");
      });
    });

    describe("getRole()", () => {
      it("Should throw an error if an email is not an email", () => {
        const eng = new Engineer("Bob", 123, "B@yahoo.com", "Bob10");
        const role = eng.getRole();
        expect(role).toEqual("Engineer");
      });
    });
  });
});
