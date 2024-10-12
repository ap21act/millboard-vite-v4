export const generateSlug = (...args) => {
  return args
    .filter((arg) => arg) // Remove undefined or null arguments
    .map((inputString) => {
      return inputString
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with dashes
        .replace(/[^\w\-+]+/g, ''); // Allow alphanumeric, dashes, and +, remove others
    })
    .join('_'); // Join all arguments with underscores
};
