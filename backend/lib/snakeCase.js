/**
 * Converts text to snake_case format
 *
 * Transforms strings from various formats (camelCase, PascalCase, kebab-case, space-separated)
 * into snake_case notation where words are separated by underscores and all characters
 * are lowercase. Commonly used for variable names, database column names, and file names.
 *
 * @param {string} text - The input text to convert. Can be in any case format.
 * @returns {string} The converted text in snake_case format.
 *
 * @example
 * toSnakeCase('HelloWorld');
 * // Returns: 'hello_world'
 *
 * @example
 * toSnakeCase('hello-world');
 * // Returns: 'hello_world'
 *
 * @example
 * toSnakeCase('Hello World');
 * // Returns: 'hello_world'
 *
 * @example
 * toSnakeCase('helloWorld');
 * // Returns: 'hello_world'
 *
 * @see {@link toDotCase} for dot.case conversion
 */
function toSnakeCase(text) {
  return text
    .replace(/([a-z])([A-Z])/g, '$1_$2') // Insert underscore between lowercase and uppercase
    .replace(/[\s-]+/g, '_') // Replace spaces and hyphens with underscores
    .toLowerCase(); // Convert to lowercase
}

module.exports = toSnakeCase;
