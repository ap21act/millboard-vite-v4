export const generateSlug = (...link) => {
  return link
    .filter((link) => link) // Remove undefined or null arguments
    .map((inputString) => {
      return inputString
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with dashes
        .replace(/[^a-z0-9\-+]/g, ''); // Allow the + character and remove others
    })
    .join('_'); // Join all arguments with underscores
};
