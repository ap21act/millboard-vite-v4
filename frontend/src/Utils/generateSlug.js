/**
 * Converts given product fields into a slug format (lowercase, hyphen-separated).
 * @param {Object} product - The product object containing slug fields.
 * @param {string} product.category - The category of the product.
 * @param {string} product.subCategory - The subcategory of the product.
 * @param {string} product.type - The type of the product.
 * @param {string} product.name - The name of the product.
 * @returns {string} - The generated slug.
 */
export function generateSlug({ category, subCategory, type, name }) {
  return [category, subCategory, type, name]
    .filter(Boolean) // Remove any undefined or empty values
    .map((text) =>
      text
        .toLowerCase()          // Convert to lowercase
        .replace(/\s+/g, '-')   // Replace spaces with hyphens
        .replace(/[^\w\-]+/g, '') // Remove any non-word characters except hyphens
        .replace(/\-\-+/g, '-') // Replace multiple hyphens with a single hyphen
        .replace(/^-+/, '')     // Trim starting hyphens
        .replace(/-+$/, '')     // Trim ending hyphens
    )
    .join('/'); // Join all parts with a forward slash
}

