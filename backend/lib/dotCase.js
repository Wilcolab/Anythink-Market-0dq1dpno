/**
 * Converts text to dot.case format
 *
 * Transforms strings from various formats (camelCase, PascalCase, snake_case, space-separated)
 * into dot.case notation where words are separated by dots and all characters are lowercase.
 * Commonly used for configuration properties, namespaced identifiers, and hierarchical keys.
 *
 * @param {string} text - The input text to convert. Can be in any case format.
 * @returns {string} The converted text in dot.case format.
 *
 * @example
 * toDotCase('HelloWorld');
 * // Returns: 'hello.world'
 *
 * @example
 * toDotCase('hello_world');
 * // Returns: 'hello.world'
 *
 * @example
 * toDotCase('hello-world');
 * // Returns: 'hello.world'
 *
 * @example
 * toDotCase('helloWorld');
 * // Returns: 'hello.world'
 *
 * @see {@link toSnakeCase} for snake_case conversion
 */
function toDotCase(text) {
  return text
    .replace(/([a-z])([A-Z])/g, '$1.$2') // Insert dot between lowercase and uppercase
    .replace(/[\s_-]+/g, '.') // Replace spaces, underscores, and hyphens with dots
    .toLowerCase(); // Convert to lowercase
}

module.exports = toDotCase;
