import React from "react";
import { CodeBlock } from "react-code-blocks";

function Tool1() {
  return (
    <div>
      <h1>CypressJS</h1>
      <p>
        Cypress is a powerful end-to-end testing framework for web applications.
        It is known for its simplicity, speed, and ability to perform testing
        directly in the browser.
      </p>
      <h2>Basics of Cypress Testing</h2>
      <p>
        <strong>Assertions:</strong> In Cypress, assertions are used to verify
        that the application behaves as expected. Assertions in Cypress are
        expressive and read like plain English, making them easy to understand.
        For example:
      </p>
      <pre>{`cy.get("#elementId").should("have.text", "Hello, World!");`}</pre>
      <p>
        This assertion checks that the element with the ID "elementId" has the
        text content "Hello, World!".
      </p>
      <h2>Writing Other Testing Code</h2>
      <p>
        Besides assertions, Cypress allows you to interact with your application
        using commands like <code>cy.get</code>, <code>cy.click</code>,{" "}
        <code>cy.type</code>, etc. You can also set up and use fixtures,
        intercept network requests, and control the application's state.
      </p>
      <h2>Running Tests</h2>
      <p>
        To run Cypress tests, you typically use the command-line interface or
        integrate it with your CI/CD pipeline. The command to open the Cypress
        Test Runner is:
      </p>
      <pre>{`npx cypress open`}</pre>
      <p>
        Cypress will open a graphical interface where you can select and run
        your tests.
      </p>
      <h2>Tool Talk</h2>
      <p>
        In our tool talk, we'll delve deeper into Cypress, discussing best
        practices, handling asynchronous tasks, and showcasing advanced
        features. Whether you're new to Cypress or an experienced user, join us
        for an insightful discussion on effective end-to-end testing.
      </p>

      <h2>Unit Testing in Cypress:</h2>
      <CodeBlock
        text={`const mockServerResponse = {
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
});`}
        language="javascript"
        showLineNumbers
        theme="duotoneLight"
      />

      <h2>Integration Testing in Cypress:</h2>
      <CodeBlock
        text={`// cypress/integration/integration.spec.js

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
});`}
        language="javascript"
        showLineNumbers
        theme="duotoneLight"
      />

      <h2>End to End Testing in Cypress:</h2>
      <CodeBlock
        text={`describe("End to End Tests", () => {
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
});`}
        language="javascript"
        showLineNumbers
        theme="duotoneLight"
      />

      <h2>Rules and Setup:</h2>
      <p>To install Cypress, use the following npm command:</p>
      <pre>npm install cypress --save-dev</pre>
      <p>Once installed, you can open the Cypress Test Runner with:</p>
      <pre>npx cypress open</pre>
      <p>
        Cypress will launch a graphical interface where you can manage and run
        your tests.
      </p>
    </div>
  );
}

export default Tool1;
