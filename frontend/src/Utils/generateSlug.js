// src/Utils/generateSlug.js

/**
 * Converts a given string into a slug format (lowercase, hyphen-separated).
 * @param {string} text - The text to be converted to a slug.
 * @returns {string} - The slugified text.
 */
export function generateSlug(text) {
  return text
    .toLowerCase()      // Convert to lowercase
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, '') // Remove any non-word characters except hyphens
    .replace(/\-\-+/g, '-')   // Replace multiple hyphens with a single hyphen
    .replace(/^-+/, '')       // Trim starting hyphens
    .replace(/-+$/, '');      // Trim ending hyphens
}
