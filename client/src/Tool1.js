import React from "react";
import { CodeBlock } from "react-code-blocks";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function Tool1() {
  return (
    <Box>
      <Container>
        <h1>CypressJS</h1>
        <p>
          Cypress is a powerful end-to-end testing framework for web
          applications. It is known for its simplicity, speed, and ability to
          perform testing directly in the browser.
        </p>

        <h2>Installing and Setting Up Cypress</h2>
        <p>To install Cypress, use the following npm command:</p>
        <CodeBlock
          text={`npm install cypress --save-dev`}
          language="bash"
          theme="duotoneLight"
        />
        <p>Once installed, you can open the Cypress Test Runner with:</p>
        <CodeBlock
          text={`npx cypress open`}
          language="bash"
          theme="duotoneLight"
        />
        <p>
          Cypress will launch a graphical interface where you can manage and run
          your tests.
        </p>

        <h2>Basics of Cypress Testing</h2>

        <p>
          Welcome to the exciting world of Cypress testing! As we embark on this
          journey, let's uncover a few fundamental concepts that make Cypress
          such a joy to work with.
        </p>

        <ol>
          <li>
            <strong>Selecting Elements:</strong>
            <ul>
              <li>
                Cypress provides the <code>cy.get()</code> command to select and
                interact with DOM elements.
              </li>
              <li>
                You can select elements by ID, class, tag name, or using other
                CSS selectors.
              </li>
              <li>
                Examples:
                <pre>
                  {`// Selecting an element by ID
cy.get("#username-input").type("JohnDoe");

// Selecting an element by class
cy.get(".login-button").click();`}
                </pre>
              </li>
            </ul>
          </li>

          <li>
            <strong>Assertions:</strong>
            <ul>
              <li>
                Assertions in Cypress are expressive and readable, making it
                easy to understand test expectations.
              </li>
              <li>
                Common assertions include checking the visibility, text content,
                or attribute values of an element.
              </li>
              <li>
                Examples:
                <pre>
                  {`// Asserting that an element contains specific text
cy.get("#welcome-message").should("have.text", "Welcome, User!");

// Asserting that an element is visible
cy.get(".error-message").should("be.visible");`}
                </pre>
              </li>
            </ul>
          </li>

          <li>
            <strong>Interacting with Elements:</strong>
            <ul>
              <li>
                Cypress allows you to simulate user interactions, such as
                clicking, typing, and submitting forms.
              </li>
              <li>
                Examples:
                <pre>
                  {`// Clicking on a button
cy.get("#submit-button").click();

// Typing into an input field
cy.get("#username-input").type("JohnDoe");

// Submitting a form
cy.get("form").submit();`}
                </pre>
              </li>
            </ul>
          </li>

          <li>
            <strong>Handling Asynchronous Code:</strong>
            <ul>
              <li>
                Cypress is designed to handle asynchronous tasks in a
                straightforward manner.
              </li>
              <li>
                Commands automatically wait for elements to be available or
                actions to complete.
              </li>
              <li>
                Example:
                <pre>
                  {`// Using the 'should' command to wait for an element to have specific text
cy.get("#loading-message").should("not.exist");`}
                </pre>
              </li>
            </ul>
          </li>

          <li>
            <strong>Using Fixtures:</strong>
            <ul>
              <li>
                Fixtures are external pieces of data that you can use in your
                tests.
              </li>
              <li>
                They are useful for testing scenarios with predefined data.
              </li>
              <li>
                Example:
                <pre>
                  {`// Using a fixture to simulate API response
cy.fixture("example.json").then((data) => {
  // Perform assertions or actions with the fixture data
  cy.get("#username").should("have.text", data.username);
});`}
                </pre>
              </li>
            </ul>
          </li>

          <li>
            <strong>Custom Commands:</strong>
            <ul>
              <li>
                Cypress allows you to create custom commands for repetitive
                actions or assertions.
              </li>
              <li>
                Example:
                <pre>
                  {`// Custom command to log in
Cypress.Commands.add("login", (username, password) => {
  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get("#login-button").click();
});

// Using the custom login command
cy.login("JohnDoe", "securePassword");`}
                </pre>
              </li>
            </ul>
          </li>
        </ol>

        <h2>Running Tests</h2>
        <p>
          To run Cypress tests, you typically use the command-line interface or
          integrate it with your CI/CD pipeline. The command to open the Cypress
          Test Runner is:
        </p>
        <CodeBlock
          text={`npx cypress open`}
          language="bash"
          theme="duotoneLight"
        />
        <p>
          Cypress will open a graphical interface where you can select and run
          your tests.
        </p>

        <h2>Test & Tutorial Discussions</h2>
        <p>
          In our test & tutorial discussion, we'll delve deeper into Cypress,
          exploring three distinct types of testing that you can perform using
          this powerful framework. We will provide code examples applied to this
          website's login form, explaining the setup, detailing what the test
          cases accomplish, and discussing the tool usage and its effectiveness.
          Whether you're new to Cypress or an experienced user, join us for an
          insightful discussion on effective testing of web applications
          tailored to real-world scenarios.
        </p>

        <h3>Unit Testing in Cypress:</h3>
        <p>
          Unit tests focus on the <code>loginUser</code> function to simulate
          interaction with the authentication endpoint. These tests are
          structured as follows:
        </p>

        <strong>Setup</strong>
        <p>A mock server response is defined to emulate server behavior.</p>

        <strong>Test Cases</strong>
        <ul>
          <li>
            <p>
              <strong>Test Case 1:</strong> Checks if the function returns a
              validation status of false for invalid login credentials.
            </p>
          </li>
          <li>
            <p>
              <strong>Test Case 2:</strong> Ensures a validation status of true
              is returned for valid login credentials.
            </p>
          </li>
        </ul>
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
        <p>
          <strong>Tool Usage:</strong> Cypress is used to stub the{" "}
          <code>fetch</code> function and intercept requests to the
          authentication endpoint, allowing the simulation of different server
          responses for testing purposes.
        </p>
        <p>
          <strong>Effectiveness:</strong> These unit tests effectively isolate
          and verify the behavior of the <code>loginUser</code> function. The
          mock server response enables controlled testing scenarios, ensuring
          the function responds correctly to different server outcomes.
        </p>

        <h3>Integration Testing in Cypress:</h3>
        <p>
          Integration tests focus on simulating interactions with the
          authentication endpoint using Cypress commands. These tests are
          structured as follows:
        </p>

        <strong>Setup</strong>
        <p>
          Each test case visits the application before interacting with the
          authentication endpoint.
        </p>

        <strong>Test Cases</strong>
        <ul>
          <li>
            <p>
              <strong>Test Case 1:</strong> The first test checks if the
              application can successfully log in with correct credentials.
            </p>
          </li>
          <li>
            <p>
              <strong>Test Case 2:</strong> The second test ensures the
              application handles incorrect credentials during login.
            </p>
          </li>
        </ul>
        <CodeBlock
          text={`describe("Integration Tests", () => {
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
        <p>
          <strong>Tool Usage:</strong> Cypress commands like{" "}
          <code>cy.request</code> are used to directly interact with the
          authentication endpoint, allowing testing of the integration between
          frontend and backend.
        </p>
        <p>
          <strong>Effectiveness:</strong> These integration tests verify that
          the application's frontend can successfully communicate with the
          backend authentication service, handling both correct and incorrect
          login scenarios.
        </p>

        <h3>End to End Testing in Cypress:</h3>
        <p>
          End-to-end tests simulate user scenarios by interacting with the
          application as a whole. The test structure includes:
        </p>

        <strong>Setup</strong>
        <p>
          The application is visited before each test, and specific interactions
          with the login form are simulated.
        </p>

        <strong>Test Cases</strong>
        <ul>
          <li>
            <p>
              <strong>Test Case 1:</strong> The first test checks if the
              application displays an error message for invalid login
              credentials.
            </p>
          </li>
          <li>
            <p>
              <strong>Test Case 2:</strong> The second test ensures the
              application can successfully log in with valid credentials..
            </p>
          </li>
        </ul>
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
        <p>
          <strong>Tool Usage:</strong> Cypress is used to simulate user
          interactions, intercept backend requests, and verify the entire login
          process from user input to server response.
        </p>
        <p>
          <strong>Effectiveness:</strong> End-to-end tests provide high-level
          validation of the complete user flow. These tests ensure that the
          application behaves correctly, from user input to server interactions,
          and finally, visual feedback.
        </p>
      </Container>
    </Box>
  );
}

export default Tool1;
