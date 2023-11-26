// cypress/integration/integration.spec.js

describe("Integration Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("should successfully log in with correct credentials", () => {
    cy.request("POST", "http://localhost:8080/auth/login", {
      email: "kheamo@1688.com",
      password: "dK1fWB/lT_l|my",
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.validation).to.be.false;
    });
  });

  it("should handle incorrect credentials during login", () => {
    cy.request("POST", "http://localhost:8080/auth/login", {
      email: "garbage-email@gmail.com",
      password: "fakePassword123.",
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.validation).to.be.false;
    });
  });
});
