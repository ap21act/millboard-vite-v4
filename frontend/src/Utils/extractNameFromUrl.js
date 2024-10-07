// Utility function to extract file names or image alt text from a URL
export const extractNameFromUrl = (url) => {
  if (typeof url !== 'string') {
    console.warn("extractNameFromUrl: Expected a string, received:", url);
    return ''; // Return an empty string if the URL is not valid
  }

  const parts = url.split('/');
  const fullName = parts[parts.length - 1]; // Get the last part of the URL, which is the file name
  const nameWithoutExtension = fullName.split('.')[0]; // Remove the extension (e.g., .jpg, .pdf)
  
  return decodeURIComponent(nameWithoutExtension.replace(/_/g, ' ')); // Decode URL and replace underscores with spaces
};
