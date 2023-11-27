const mockServerResponse = {
  status: 200,
  validation: false,
  sent: { username: "garbage-email@gmail.com", password: "fakePassword123." },
};

async function loginUser(email, password) {
  const rawResponse = await fetch("/auth/login", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const content = await rawResponse.json();
  return content;
}

describe("Unit Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
  });

  it("should return validation as false for invalid login credentials", async () => {
    cy.stub(window, "fetch").resolves({
      json: cy.stub().resolves(mockServerResponse),
    });

    const response = await loginUser(
      "garbage-email@gmail.com",
      "fakePassword123."
    );

    // Cypress assertions
    expect(response.status).to.equal(200);
    expect(response.validation).to.be.false;
  });

  it("should return validation as true for valid login credentials", async () => {
    cy.stub(window, "fetch").resolves({
      json: cy.stub().resolves({
        status: 200,
        validation: true,
        sent: { username: "kheamo@1688.com", password: "dK1fWB/lT_l|my" },
      }),
    });

    const response = await loginUser("kheamo@1688.com", "dK1fWB/lT_l|my");

    expect(response.status).to.equal(200);
    expect(response.validation).to.be.true;
  });
});
