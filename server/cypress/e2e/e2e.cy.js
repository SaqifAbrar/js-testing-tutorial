describe("End to End Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("should display an error message for invalid login", () => {
    cy.get("#email").type("garbage-email@gmail.com");
    cy.get("#password").type("fakePassword123.");
    cy.get("form").submit();
  });

  it("should successfully log in with valid credentials", () => {
    cy.get("#email").type("kheamo@1688.com");
    cy.get("#password").type("dK1fWB/lT_l|my");
    cy.get("form").submit();
  });
});
