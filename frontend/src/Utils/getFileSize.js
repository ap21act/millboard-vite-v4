// utils/getFileSize.js
export const getFileSize = async (fileUrl) => {
    try {
      // Fetch file metadata (only if the server supports HEAD requests)
      const response = await fetch(fileUrl, { method: 'HEAD' });
      const fileSizeInBytes = response.headers.get('content-length');
      if (fileSizeInBytes) {
        const fileSizeInMB = (fileSizeInBytes / (1024 * 1024)).toFixed(1) + ' MB';
        return fileSizeInMB;
      }
      return 'Unknown Size';
    } catch (error) {
      console.error('Error fetching file size:', error);
      return 'Unknown Size';
    }
  };
  