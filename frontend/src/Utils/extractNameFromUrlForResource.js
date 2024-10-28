// Utility function to extract file names or image alt text and file type from a URL, with additional handling for '-'
export const extractNameFromUrlForResource = (url) => {
    if (typeof url !== 'string') {
      console.warn("extractNameFromUrlForResource: Expected a string, received:", url);
      return { fileName: '', extension: '' }; // Return an object with empty values if the URL is not valid
    }
  
    try {
      // Split the URL by slashes to get the file part
      const parts = url.split('/');
      const fullName = parts[parts.length - 1]; // Get the last part of the URL, which is the file name
  
      // Decode the URL component to handle spaces and special characters
      const decodedFullName = decodeURIComponent(fullName);
  
      // Split the name by the last period to separate the name and extension
      const nameParts = decodedFullName.split('.');
      const nameWithoutExtension = nameParts.slice(0, -1).join('.'); // Handle cases where filenames contain periods
      const extension = nameParts.length > 1 ? nameParts[nameParts.length - 1].toUpperCase() : '';
  
      // Replace underscores and hyphens with spaces for better readability
      const formattedName = nameWithoutExtension.replace(/_/g, ' ').replace(/-/g, ' ');
  
      return { fileName: formattedName, extension };
    } catch (error) {
      console.error('extractNameFromUrlForResource: Error decoding the URL:', error);
      return { fileName: '', extension: '' };
    }
  };
  