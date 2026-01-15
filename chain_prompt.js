/**
 * CHAIN-OF-THOUGHT PROMPTING TECHNIQUE
 * 
 * This file demonstrates a CHAIN-OF-THOUGHT PROMPT approach.
 * Chain-of-thought prompts break down complex problems into step-by-step reasoning.
 * The AI model explains its reasoning at each step, leading to more reliable outputs.
 * 
 * Use this approach when:
 * - The problem is complex with multiple steps
 * - You want to understand the reasoning behind decisions
 * - You need transparency in how the solution works
 * - Debugging and verification are important
 * - You want to catch errors early by reviewing logic
 */

// CHAIN-OF-THOUGHT PROMPT FOR: Converting strings to kebab-case with step-by-step reasoning

/**
 * Converts any string format to kebab-case.
 * 
 * CHAIN-OF-THOUGHT REASONING:
 * Step 1: Handle camelCase and PascalCase transitions
 *   - Find lowercase letter followed by uppercase letter
 *   - Insert hyphen between them: "helloWorld" → "hello-World"
 * 
 * Step 2: Replace other separators with hyphens
 *   - Replace spaces with hyphens: "hello world" → "hello-world"
 *   - Replace underscores with hyphens: "hello_world" → "hello-world"
 * 
 * Step 3: Remove special characters
 *   - Keep only word characters (letters, digits, underscores) and hyphens
 *   - Remove @, !, #, etc.: "hello@world!" → "helloworld"
 * 
 * Step 4: Convert to lowercase
 *   - Ensure consistent case: "HelloWorld" → "helloworld"
 * 
 * Step 5: Clean up multiple consecutive hyphens
 *   - Replace multiple hyphens with single hyphen: "hello--world" → "hello-world"
 * 
 * Step 6: Remove leading and trailing hyphens
 *   - Trim hyphens from start and end: "-hello-world-" → "hello-world"
 * 
 * @param {string} str - The input string in any format
 * @returns {string} The kebab-case formatted string
 */
function toKebabCase(str) {
    // Step 1: Handle camelCase and PascalCase
    // Insert hyphen between lowercase and uppercase letters
    let result = str.replace(/([a-z])([A-Z])/g, '$1-$2');
    
    // Step 2: Replace other separators with hyphens
    // This handles spaces and underscores
    result = result.replace(/[\s_]+/g, '-');
    
    // Step 3: Remove special characters
    // Keep only alphanumeric characters and hyphens
    result = result.replace(/[^\w-]/g, '');
    
    // Step 4: Convert to lowercase
    result = result.toLowerCase();
    
    // Step 5: Clean up multiple consecutive hyphens
    result = result.replace(/-+/g, '-');
    
    // Step 6: Remove leading and trailing hyphens
    result = result.replace(/^-|-$/g, '');
    
    return result;
}

// Comprehensive examples demonstrating each step
const testCases = [
    { input: 'helloWorld', expected: 'hello-world', step: 'Step 1: camelCase' },
    { input: 'HelloWorld', expected: 'hello-world', step: 'Steps 1+4: PascalCase + lowercase' },
    { input: 'hello world', expected: 'hello-world', step: 'Step 2: space-separated' },
    { input: 'hello_world', expected: 'hello-world', step: 'Step 2: underscore-separated' },
    { input: 'hello  world', expected: 'hello-world', step: 'Steps 2+5: multiple spaces + cleanup' },
    { input: 'hello-world', expected: 'hello-world', step: 'Already kebab-case' },
    { input: 'hello@world!', expected: 'helloworld', step: 'Step 3: remove special characters' },
    { input: 'getHTTPResponseCode', expected: 'get-h-t-t-p-response-code', step: 'Step 1: consecutive capitals' }
];

// Test and validate all cases
if (require.main === module) {
    console.log('\n=== Chain-of-Thought Test Results ===\n');
    
    let passed = 0;
    let failed = 0;
    
    testCases.forEach(testCase => {
        const result = toKebabCase(testCase.input);
        const isCorrect = result === testCase.expected;
        const status = isCorrect ? '✓' : '✗';
        
        if (isCorrect) passed++;
        else failed++;
        
        console.log(`${status} ${testCase.step}`);
        console.log(`   Input:    "${testCase.input}"`);
        console.log(`   Expected: "${testCase.expected}"`);
        console.log(`   Got:      "${result}"`);
        console.log();
    });
    
    console.log(`\nSummary: ${passed} passed, ${failed} failed out of ${testCases.length} tests\n`);
}

module.exports = toKebabCase;