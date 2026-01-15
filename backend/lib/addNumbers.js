/**
 * Adds two numbers and returns their sum
 * @param {number} num1 - The first number
 * @param {number} num2 - The second number
 * @returns {number} The sum of num1 and num2
 * @throws {Error} If inputs are null, undefined, or non-numeric
 */
function addNumbers(num1, num2) {
  // Handle null or undefined values
  if (num1 === null || num1 === undefined) {
    throw new Error('First argument cannot be null or undefined');
  }
  if (num2 === null || num2 === undefined) {
    throw new Error('Second argument cannot be null or undefined');
  }

  // Check if inputs are numbers
  if (typeof num1 !== 'number' || isNaN(num1)) {
    throw new Error(`First argument must be a valid number, received: ${typeof num1}`);
  }
  if (typeof num2 !== 'number' || isNaN(num2)) {
    throw new Error(`Second argument must be a valid number, received: ${typeof num2}`);
  }

  return num1 + num2;
}

module.exports = addNumbers;
