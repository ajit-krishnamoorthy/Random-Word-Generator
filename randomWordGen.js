    // Function to fetch the text file from a URL
async function fetchTextFile(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const text = await response.text();
      return text;
    } catch (error) {
      console.error('Error fetching the text file:', error);
      return null;
    }
  }
  
  // Function to parse the text and extract words into an array
  function extractWords(text) {
    if (!text) return [];
    const words = text.split(/\s+/); // Split by spaces and line breaks
    return words.filter(word => word.length > 0); // Remove empty strings
  }
  
  // Fetch the text file and process it
  function PickRandomWord(frm) {
      // Example URL to a text file
  const textFileURL = 'https://raw.githubusercontent.com/dwyl/english-words/master/words.txt';
  fetchTextFile(textFileURL)
    .then(text => {
      const wordArray = extractWords(text);
      console.log('Words in the array:', wordArray);
      var NumberOfWords = wordArray.length;
      // Generate a random number between 1 and NumberOfWords
      var rnd = Math.ceil(Math.random() * NumberOfWords)
       // Display the word inside the text box
       frm.WordBox.value = wordArray[rnd];

    })
    .catch(error => {
      console.error('An error occurred:', error);
    });



}
  