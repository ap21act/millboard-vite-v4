// Utility function to shuffle and select random FAQs
export const getRandomData = (data, count) => {
    // Shuffle the array in the 
    const shuffled = data.sort(() => 0.5 - Math.random());
    // Return the specified number of random elements
    return shuffled.slice(0, count);
  };

  