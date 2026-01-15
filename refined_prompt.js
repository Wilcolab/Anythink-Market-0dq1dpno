/**
 * REFINED PROMPTING TECHNIQUE
 * 
 * This file demonstrates a REFINED PROMPT approach.
 * Refined prompts build on basic prompts by adding detailed specifications,
 * constraints, error handling requirements, and edge case considerations.
 * The AI model creates more robust, production-ready code based on these specifications.
 * 
 * Use this approach when:
 * - You need robust, production-quality code
 * - Error handling and edge cases are important
 * - You want to specify exact behavior including error conditions
 * - You're building utilities that will be widely used
 */

// REFINED PROMPT FOR: Function that adds two numbers with comprehensive error handling

/**
 * Adds two numbers and returns their sum
 * 
 * REQUIREMENTS:
 * - Must validate that both inputs are valid numbers
 * - Must handle null and undefined inputs gracefully
 * - Must reject string inputs (even numeric strings like '5')
 * - Must reject NaN values
 * - Must provide descriptive error messages
 * - Must include comprehensive JSDoc documentation
 * 
 * @param {number} num1 - The first number to add
 * @param {number} num2 - The second number to add
 * @returns {number} The sum of num1 and num2
 * @throws {Error} If either input is null, undefined, or not a valid number
 * 
 * @example
 * addNumbers(5, 3);
 * // Returns: 8
 * 
 * @example
 * addNumbers(10.5, 20.3);
 * // Returns: 30.8
 * 
 * @example
 * addNumbers(-5, 10);
 * // Returns: 5
 * 
 * @example
 * addNumbers('5', 3);
 * // Throws: Error: First argument must be a valid number, received: string
 * 
 * @example
 * addNumbers(5, null);
 * // Throws: Error: Second argument cannot be null or undefined
 */
function addNumbers(num1, num2) {
  // Handle null or undefined values with explicit checks
  if (num1 === null || num1 === undefined) {
    throw new Error('First argument cannot be null or undefined');
  }
  if (num2 === null || num2 === undefined) {
    throw new Error('Second argument cannot be null or undefined');
  }

  // Validate that inputs are valid numbers
  // Rejects strings (including numeric strings), booleans, and other types
  if (typeof num1 !== 'number' || isNaN(num1)) {
    throw new Error(`First argument must be a valid number, received: ${typeof num1}`);
  }
  if (typeof num2 !== 'number' || isNaN(num2)) {
    throw new Error(`Second argument must be a valid number, received: ${typeof num2}`);
  }

  // Perform the addition
  return num1 + num2;
}

// Test cases demonstrating proper usage and error handling
if (require.main === module) {
    console.log('\n=== Testing addNumbers Function ===\n');
    
    // Success cases
    try {
        console.log('✓ addNumbers(5, 3) =', addNumbers(5, 3));
        console.log('✓ addNumbers(10.5, 20.3) =', addNumbers(10.5, 20.3));
        console.log('✓ addNumbers(-5, 10) =', addNumbers(-5, 10));
    } catch (error) {
        console.error('✗ Unexpected error in success cases:', error.message);
    }
    
    // Error cases
    console.log('\nError handling tests:\n');
    
    const errorCases = [
        { args: ['5', 3], description: 'String argument' },
        { args: [5, '3'], description: 'Second argument as string' },
        { args: [null, 3], description: 'Null first argument' },
        { args: [5, undefined], description: 'Undefined second argument' },
        { args: [NaN, 3], description: 'NaN value' }
    ];
    
    errorCases.forEach(({ args, description }) => {
        try {
            addNumbers(...args);
            console.log(`✗ ${description}: Should have thrown an error`);
        } catch (error) {
            console.log(`✓ ${description}`);
            console.log(`   Error: ${error.message}`);
        }
    });
}

module.exports = addNumbers;
