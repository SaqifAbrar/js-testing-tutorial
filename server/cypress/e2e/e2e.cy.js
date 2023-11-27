describe("End to End Tests", () => {
  const mockServerResponse = {
    status: 200,
    validation: false,
    sent: { username: "garbage-email@gmail.com", password: "fakePassword123." },
  };

  const loginUser = (email, password) => {
    return cy.request({
      method: "POST",
      url: "/auth/login",
      body: { email, password },
    });
  };

  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("should display an error message for invalid login", () => {
    cy.intercept("POST", "http://localhost:8080/auth/login", {
      statusCode: 200,
      body: mockServerResponse,
    }).as("loginRequest");

    cy.get("#email").type("garbage-email@gmail.com");
    cy.get("#password").type("fakePassword123.");
    cy.get("form").submit();

    cy.wait("@loginRequest").then((interception) => {
      const response = interception.response.body;

      expect(response.status).to.equal(200);
      expect(response.validation).to.be.false;
    });
  });

  it("should successfully log in with valid credentials", () => {
    cy.intercept("POST", "/auth/login", {
      statusCode: 200,
      body: {
        status: 200,
        validation: true,
        sent: { username: "kheamo@1688.com", password: "dK1fWB/lT_l|my" },
      },
    }).as("loginRequest");

    cy.get("#email").type("kheamo@1688.com");
    cy.get("#password").type("dK1fWB/lT_l|my");
    cy.get("form").submit();

    cy.wait("@loginRequest").then((interception) => {
      const response = interception.response.body;

      expect(response.status).to.equal(200);
      expect(response.validation).to.be.true;
    });
  });
});
