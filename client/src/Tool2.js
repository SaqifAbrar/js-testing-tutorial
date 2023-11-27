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

				Assertions in Jest are used to test the application’s state. They let you test that the function under test behaves as expected.
				</p>
 				<p>Example of a simple assertion in Jest:</p>

				<CodeBlock
				text={`test('multiplication', () => {
const result = 8 * 8;
expect(result).toBe(64);
});`}
				language="bash"
				theme="duotoneLight"
      			/>

				<p>
				This test checks for the result of a simple multiplication operation, ensuring that it equals 64.
				<p/>
				<h2>Overview of different assertions</h2>

				<p>
				Jest provides functions to structure your tests:
				</p>

				<ul>
				<li>describe: Creates a block that groups together several related tests.</li>
				<li>test or it: Used for writing individual tests.</li>
				<li>expect: Lets you access a number of “matchers” that let you validate different things.</li>
				</ul> 
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
