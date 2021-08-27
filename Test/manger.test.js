const Manager = require("../JS/manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("Should create an object with name, id and email", () => {
      const Mng = new Manager("Jack", 1, "J@yahoo.com");

      expect(Mng.name).toEqual("Jack");
      expect(Mng.id).toEqual(1);
      expect(Mng.email).toEqual("J@yahoo.com");
    });

    describe("getName()", () => {
      it("Should return the name of the Manager", () => {
        const Mng = new Manager("Jack", 1, "J@yahoo.com");
        const getNam = Mng.getName();
        expect(getNam).toEqual("Jack");
      });
    });

    describe("getId()", () => {
      it("Should return the id of the Manager", () => {
        const Mng = new Manager("Jack", 1, "J@yahoo.com");
        const Id = Mng.getId();
        expect(Id).toEqual(1);
      });
    });

    describe("getEmail()", () => {
      it("Should return the email of the Manager", () => {
        const Mng = new Manager("Jack", 1, "J@yahoo.com");
        const email = Mng.getEmail();
        expect(email).toEqual("J@yahoo.com");
      });
    });

    describe("getRole()", () => {
      it("Should throw an error if an email is not an email", () => {
        const Mng = new Manager("Jack", 1, "J@yahoo.com");
        const role = Mng.getRole();
        expect(role).toEqual("Manager");
      });
    });
  });
});
