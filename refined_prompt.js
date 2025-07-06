// Write a JavaScript function toCamelCase that converts strings to camelCase with comprehensive error handling and edge case management.
// 
// Requirements:
// - Handle different separators: spaces, underscores, hyphens, dots
// - Handle mixed case inputs (lowercase, UPPERCASE, MiXeD)
// - Include input validation: throw descriptive errors for non-string inputs
// - Handle edge cases: empty strings, null, undefined, strings with only separators
// - Handle consecutive separators gracefully
// - Preserve existing camelCase if input is already properly formatted
// 
// Examples:
// toCamelCase("first name") should return "firstName"
// toCamelCase("user_id") should return "userId"
// toCamelCase("SCREEN-NAME") should return "screenName"
// toCamelCase("mobile.number") should return "mobileNumber"
// toCamelCase("already-camelCase") should return "alreadyCamelCase"
// toCamelCase("") should return ""
// toCamelCase("   ") should return ""
// toCamelCase("multiple---separators") should return "multipleSeparators"
// toCamelCase(null) should throw an error

function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    if (input === null || input === undefined) {
        throw new Error('Input cannot be null or undefined');
    }
    const trimmed = input.trim();
    if (trimmed === '') {
        return '';
    }
    // If already camelCase and contains no separators, return as is
    if (/^[a-z][a-zA-Z0-9]*$/.test(trimmed)) {
        return trimmed;
    }
    // Split by space, hyphen, underscore, or dot, filter out empty parts
    const words = trimmed
        .split(/[\s\-_\.]+/)
        .filter(Boolean)
        .map(word => word.toLowerCase());
    if (words.length === 0) {
        return '';
    }
    return words
        .map((word, idx) => idx === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

// Create a function that converts strings to dot.case format

function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    if (input === null || input === undefined) {
        throw new Error('Input cannot be null or undefined');
    }
    const trimmed = input.trim();
    if (trimmed === '') {
        return '';
    }
    // If already dot.case and contains no separators other than dots, return as is
    if (/^[a-z0-9]+(\.[a-z0-9]+)*$/.test(trimmed)) {
        return trimmed;
    }
    // Split by space, hyphen, underscore, or dot, filter out empty parts
    const words = trimmed
        .split(/[\s\-_\.]+/)
        .filter(Boolean)
        .map(word => word.toLowerCase());
    if (words.length === 0) {
        return '';
    }
    return words.join('.');
}

// Example usage and test cases
const testCases = [
    "first name",
    "user_id",
    "SCREEN-NAME",
    "mobile.number",
    "already-camelCase",
    "",
    "   ",
    "multiple---separators",
    null,
    123
];

testCases.forEach(tc => {
    try {
        console.log(`toCamelCase(${JSON.stringify(tc)}):`, toCamelCase(tc));
    } catch (e) {
        console.log(`toCamelCase(${JSON.stringify(tc)}): ERROR -`, e.message);
    }
});

testCases.forEach(tc => {
    try {
        console.log(`toDotCase(${JSON.stringify(tc)}):`, toDotCase(tc));
    } catch (e) {
        console.log(`toDotCase(${JSON.stringify(tc)}): ERROR -`, e.message);
    }
});

// Generate detailed JSDoc documentation for our string case conversion functions

/**
 * Converts a string to camelCase format with comprehensive error handling.
 * @param {string} input - The string to convert to camelCase
 * @returns {string} The converted camelCase string
 * @throws {Error} When input is not a string or is null/undefined
 * @example
 * toCamelCase("hello world") // returns "helloWorld"
 * toCamelCase("user_id") // returns "userId"
 * toCamelCase("SCREEN-NAME") // returns "screenName"
 */

/**
 * Converts a string to dot.case format with comprehensive error handling.
 * @param {string} input - The string to convert to dot.case
 * @returns {string} The converted dot.case string
 * @throws {Error} When input is not a string or is null/undefined
 * @example
 * toDotCase("hello world") // returns "hello.world"
 * toDotCase("user_id") // returns "user.id"
 * toDotCase("SCREEN-NAME") // returns "screen.name"
 */

// CHAIN PROMPTING EXAMPLE:
// Create a JavaScript function called toKebabCase that follows these sequential steps:
// Step 1: First implement comprehensive input validation (check for string type, null, undefined, and empty strings)
// Step 2: Then normalize the input by handling multiple separators (spaces, underscores, dots, hyphens) and mixed case
// Step 3: Finally convert to kebab-case format (lowercase words separated by hyphens) and add JSDoc documentation
// Make sure each step builds upon the previous one to create a complete, robust function
