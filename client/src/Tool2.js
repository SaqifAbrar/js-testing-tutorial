import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { CodeBlock } from "react-code-blocks";

export default function Tool2() {
	return (
		<Box>
			<Container>
				<h1>Jest</h1>
				<h2>Jest Overview</h2>
				<p>Jest is a JavaScript Testing Framework with a focus on simplicity. It works with projects using various tools  and has all you ned to write comprehensive tests. </p>

				<h2>Jest Evaluation</h2>
				
				<h3> Accuracy</h3>
				<p> Jest scores highly in its accuracy at testing Javascript code. It provides clear and specific error messages when tests fail making it easier to identify issues. It alose supports snapshot testing to identify unexpected changes in code's behaviour</p>

				<h3> Ease of Use</h3>
				<p> Jest is an easy to use test platform. It works with minimal configuration for most Java script project and has command line support for running tests</p>

				<h3> Reporting Facility</h3>
				<p> provides detailed reports on tests reulsts on which tests failed and why those failures occured. It also has code coverage reports allowing you  to see which parts of your code are not covered by tests</p>

				<h3> Automation and Integration</h3>
				<p> Jest supports automated tests which can be run in parrallel for maximum performance. It has built in support for mocking. Jest is compatimblle with other prohject like Babel, TypeScript, Node, React, Angular and Vue </p>

				<h3> Overall</h3>
				<p> Jest is a comprehensive testing framework that excels in accuracy, ease of use, reporting, and automation. It is well-integrated, well-supported, and widely used in the JavaScript community.It should have the necesssary tools and geatures for you testing needs</p>


				<h2>Installation Instructions</h2>
				<p>To install Jest, use the following npm command:</p>
				<CodeBlock
				text={`npm install jest --save-dev`}
				language="bash"
				theme="duotoneLight"
      			/>
				<h2>Basics of Jest Testing</h2>
				<p>
				Some of the Basic jest Function Include:
				</p>

				<ul>
				<li><strong>describe:</strong> Creates a block that groups together several related tests.</li>
				<li><strong>test:</strong> Used for writing individual tests.</li>
				<li><strong>expect:</strong> Lets you access a number of “matchers” that let you validate different things.</li>
				</ul> 
				
				
				<p>

				Applying these functions you can create tests to ensure proper functioning of an application
				</p>
 				<p>Example of a simple assertion in Jest:</p>

				<CodeBlock
				text={`test('Add 1 + 1', () => {
const result = 1 + 1;
expect(result).toBe(2);
});`}
				language="bash"
				theme="duotoneLight"
      			/>

				<p>
				This test checks for the result of a simple addition operation, ensuring that it equals 2.
				<p/>
				<h2>Overview of different assertions</h2>

				<p>
				Here’s an overview of some common "matchers" in Jest:
				</p>
				<h3>Equality and Inequality</h3>
				
				<CodeBlock
				text={`expect(a).toBe(b);    // Asserts that a is equal to b
expect(a).not.toBe(b);    // Asserts that a is not equal to b`}
				language="bash"
				theme="duotoneLight"
      			/>
								<h3>Containment</h3>
				
				<CodeBlock
				text={`expect(sequence).toContain(item);    // Asserts that item is in the sequence
expect(sequence).not.toContain(item); // Asserts that item is not in the sequence`}
				language="bash"
				theme="duotoneLight"
      			/>
								<h3>Greater and Less Than</h3>
				
				<CodeBlock
				text={`expect(a).toBeGreaterThan(b);   // Asserts that a is greater than b
expect(a).toBeLessThan(b);   // Asserts that a is less than b`}
				language="bash"
				theme="duotoneLight"
      			/>

	<h3>SnapShot Testing</h3>
				
				<CodeBlock
				text={`expect(a).toMatchSnapshot();   // Asserts that a has not changed since the last time the test was run`}
				language="bash"
				theme="duotoneLight"
      			/>

				<h2>Testing Asynchronous Code</h2>
				To test Asynchronous Code Simply put the async keyword in the testfunction  and make sure to await before calling the asynchronus function

				<CodeBlock
				text={`// Synchronus Test
test('adds 1 + 2 to equal 3', () => {
	expect(add(1, 2)).toBe(3);
});
				
				
				// Asynchronus Test
test('adds 1 + 2 to equal 3', async () => {
  const result = await asyncAdd(1, 2);
  expect(result).toBe(3);
});`}
				language="bash"
				theme="duotoneLight"
      			/>






				</p>
				<h2>Running Tests</h2>
				<p>To run your Jest tests, you run the following command</p>
				<CodeBlock
				text={`npx jest`}
				language="bash"
				theme="duotoneLight"
      			/>
				<p>This will run all test files with the .test.js extension</p>
				<h2>In Depth Test</h2>
				<p>
					As an Example to Create test cases to ensure a specific function is working  I will walk through how to Unit test the searchUser Function using the tools provided by jest.
					<h3>Step 1: Begin the test suite</h3>
				<CodeBlock
				text={`const searchUser = require('./dbConfig.js');

describe('searchUser', () => {`}
				language="bash"
				theme="duotoneLight"
      			/>

				<p>The first line imports the <strong>searchUser</strong> function from the dbConfig.js and the second uses the <strong>describe</strong> function to begin a test suite for the SearchUser function</p>

					<h3>Step 2: Test Case Email is empty</h3>
					<CodeBlock
				text={`test('should return -1 when email is empty', async () => {
	const result = await searchUser('', {});
	expect(result).toBe(-1);
});`}
				language="bash"
				theme="duotoneLight"
      			/>

				<p>This test case checks if searchUser returns -1 when the email is an empty string. The expect function is used to check if the actual result matches the expected result.</p>




					<h3>Step 3: Test Case User is not found</h3>

					<CodeBlock
				text={`test('should return -1 when user is not found', async () => {
					const db = {
					  all: jest.fn((query, params, callback) => callback(null, [])),
					};
				  
					const result = await searchUser('notfound@example.com', db);
					expect(result).toBe(-1);
				  });`}
				language="bash"
				theme="duotoneLight"
      			/>

				<p>This test case checks if searchUser returns -1 when the user is not found in the database. A mock database object is created with a jest.fn() function that simulates a scenario where the user is not found.</p>

					<h3>Step 4: Test Case User is found</h3>
					<CodeBlock
				text={`test('should return user id when user is found', async () => {
					const db = {
					  all: jest.fn((query, params, callback) => callback(null, [{ id: 123 }])),
					};
				  
					const result = await searchUser('found@example.com', db);
					expect(result).toBe(123);
				  });`}
				language="bash"
				theme="duotoneLight"
      			/>

				<p>This test case checks if searchUser returns the correct user id when the user is found in the database. A mock database object is created with a jest.fn() function that simulates a scenario where the user is found.</p>

				<h3>Step 5: Run the Tests</h3>
				<p> Run the Test suite with </p>
				<CodeBlock
				text={`npx jest`}
				language="bash"
				theme="duotoneLight"
      			/>
				<p> If the test suite passes that means that the searchUser function performs as expected. If it does not pass all the test the specific test failures can help determine what functionality is missing from the search User function</p>
				</p>
			</Container>
		</Box>
	);
}
