/**
 * BASIC PROMPTING TECHNIQUE
 * 
 * This file demonstrates a BASIC PROMPT approach.
 * A basic prompt is a simple, straightforward instruction without examples.
 * The AI model relies on its training knowledge to understand and implement the task.
 * 
 * Use this approach when:
 * - The task is simple and well-defined
 * - The desired behavior is standard and commonly known
 * - You want a quick response without verbose examples
 */

// BASIC PROMPT FOR: Convert a string to camelCase format

/**
 * Converts a string to camelCase format.
 * 
 * This function takes a string with various separators (spaces, hyphens, underscores)
 * and converts it to camelCase where the first word is lowercase and subsequent words
 * have their first letter capitalized with no separators.
 * 
 * @param {string} str - The input string to convert
 * @returns {string} The camelCase version of the input string
 * 
 * @example
 * toCamelCase("hello world")           // returns "helloWorld"
 * toCamelCase("hello-world-foo")       // returns "helloWorldFoo"
 * toCamelCase("hello_world_bar")       // returns "helloWorldBar"
 * toCamelCase("HelloWorld")            // returns "helloWorld"
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

// Export for use in other modules
module.exports = toCamelCase;