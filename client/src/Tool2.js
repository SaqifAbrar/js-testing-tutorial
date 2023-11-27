import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { CodeBlock } from "react-code-blocks";

export default function Tool2() {
	return (
		<Box>
			<Container>
				<h1>Jest</h1>
				<p>Jest is a JavaScript Testing Framework with a focus on simplicity. It works with projects using various tools  and has all you ned to write comprehensive tests. </p>
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
				<h2>Test & Tutorial Discussions</h2>
				<p>
					Talk about the tests you made in greater detail. Talk about how the
					test cases are structured, how the tools is used, and how effective
					are they.
				</p>
			</Container>
		</Box>
	);
}
