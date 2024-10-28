// utils/transformData.js

export const transformFilesData = (filesUrls) => {
    return Object.entries(filesUrls).map(([fileName, fileUrl]) => ({
      fileName,
      fileUrl,
    }));
  };
  