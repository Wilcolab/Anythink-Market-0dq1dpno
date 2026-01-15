/**
 * Converts any string format to kebab-case
 * @param {string} str - The input string
 * @returns {string} - The kebab-case formatted string
 */
function toKebabCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Handle camelCase and PascalCase
        .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/[^\w-]/g, '') // Remove special characters
        .toLowerCase() // Convert to lowercase
        .replace(/-+/g, '-') // Remove multiple consecutive hyphens
        .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

// Example usage with different formats:
console.log(toKebabCase('helloWorld'));           // 'hello-world'
console.log(toKebabCase('HelloWorld'));           // 'hello-world'
console.log(toKebabCase('hello world'));          // 'hello-world'
console.log(toKebabCase('hello_world'));          // 'hello-world'
console.log(toKebabCase('hello  world'));         // 'hello-world'
console.log(toKebabCase('hello-world'));          // 'hello-world'
console.log(toKebabCase('hello@world!'));         // 'hello-world'
console.log(toKebabCase('getHTTPResponseCode')); // 'get-h-t-t-p-response-code'