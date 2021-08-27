const Engineer = require("../JS/engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("Should create an object with name, id and email", () => {
      const eng = new Engineer("Bob", 1, "B@yahoo.com");

      expect(eng.name).toEqual("Bob");
      expect(eng.id).toEqual(1);
      expect(eng.email).toEqual("B@yahoo.com");
    });

    describe("getName()", () => {
      it("Should return the name of the Engineer", () => {
        const eng = new Engineer("Bob", 1, "B@yahoo.com");
        const getNam = eng.getName();
        expect(getNam).toEqual("Bob");
      });
    });

    describe("getId()", () => {
      it("Should return the id of the Engineer", () => {
        const eng = new Engineer("Bob", 1, "B@yahoo.com");
        const Id = eng.getId();
        expect(Id).toEqual(1);
      });
    });

    describe("getEmail()", () => {
      it("Should return the email of the Engineer", () => {
        const eng = new Engineer("Bob", 1, "B@yahoo.com");
        const email = eng.getEmail();
        expect(email).toEqual("B@yahoo.com");
      });
    });

    describe("getRole()", () => {
      it("Should throw an error if an email is not an email", () => {
        const eng = new Engineer("Bob", 1, "B@yahoo.com");
        const role = eng.getRole();
        expect(role).toEqual("Engineer");
      });
    });
  });
});
