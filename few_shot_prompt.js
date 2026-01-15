/**
 * FEW-SHOT PROMPTING TECHNIQUE
 * 
 * This file demonstrates a FEW-SHOT PROMPT approach.
 * Few-shot prompts provide several examples of input-output pairs.
 * The AI model learns the pattern from these examples and applies it to new inputs.
 * 
 * Use this approach when:
 * - The task has specific patterns or edge cases
 * - You want to guide the model with concrete examples
 * - The desired behavior might be ambiguous without examples
 * - You need consistent formatting or style
 */

// FEW-SHOT EXAMPLES FOR: Converting strings to camelCase

const examples = [
    {
        input: 'first name',
        output: 'firstName',
        description: 'Space-separated words'
    },
    {
        input: 'user_id',
        output: 'userId',
        description: 'Underscore-separated words'
    },
    {
        input: 'SCREEN_NAME',
        output: 'screenName',
        description: 'Uppercase underscore-separated words'
    },
    {
        input: 'mobile-number',
        output: 'mobileNumber',
        description: 'Hyphen-separated words'
    },
    {
        input: 'HelloWorld',
        output: 'helloWorld',
        description: 'PascalCase to camelCase'
    },
    {
        input: 'API_ENDPOINT_URL',
        output: 'apiEndpointUrl',
        description: 'All caps to camelCase'
    }
];

/**
 * Converts a string to camelCase format based on the examples provided above.
 * 
 * @param {string} str - The input string to convert
 * @returns {string} The camelCase version of the input string
 */
function toCamelCase(str) {
    return str
        .split(/[-_\s]+/)
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Test cases demonstrating the few-shot examples
console.log('\n=== Few-Shot Examples ===\n');
examples.forEach(example => {
    const result = toCamelCase(example.input);
    const status = result === example.output ? '✓' : '✗';
    console.log(`${status} ${example.description}`);
    console.log(`   Input:  "${example.input}" → Output: "${result}"`);
});

module.exports = toCamelCase;