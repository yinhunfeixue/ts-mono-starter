/**
 * Capitalizes the first letter of a string
 * @param str - Input string
 * @returns String with the first letter capitalized
 */
export function capitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string to camelCase
 * @param str - Input string
 * @returns camelCase version of the string
 */
export function camelCase(str: string): string {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}

/**
 * Converts a string to kebab-case
 * @param str - Input string
 * @returns kebab-case version of the string
 */
export function kebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/**
 * Truncates a string to a specified length and adds ellipsis
 * @param str - Input string
 * @param maxLength - Maximum length of the string
 * @returns Truncated string with ellipsis if needed
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + '...';
}

/**
 * Reverses a string
 * @param str - Input string
 * @returns Reversed string
 */
export function reverse(str: string): string {
  return str.split('').reverse().join('');
}
