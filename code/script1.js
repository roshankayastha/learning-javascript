/**
 * Creates a simple word meaning dictionary using a JavaScript object.
 */
function createWordDictionary() {
  const dictionary = {
    // Word: Meaning
    "serendipity": "The occurrence and development of events by chance in a happy or beneficial way.",
    "ephemeral": "Lasting for a very short time.",
    "ubiquitous": "Present, appearing, or found everywhere.",
    "mellifluous": "Of a voice or words) sweet or musical; pleasant to hear.",
    "pulchritude": "Physical beauty (often used humorously or rhetorically).",
  };

  return dictionary;
}

// Function to display the dictionary in a readable format
function displayDictionary(dictionary) {
  console.log("--- Word Meaning Dictionary ---");
  for (const [word, meaning] of Object.entries(dictionary)) {
    console.log(`\nWord: ${word}`);
    console.log(`Meaning: ${meaning}`);
  }
  console.log("-------------------------------");
}

// Main execution
const myDictionary = createWordDictionary();
displayDictionary(myDictionary);

// Example of how to look up a single word:
const wordToLookup = "ephemeral";
console.log(`\nLooking up "${wordToLookup}":`);
if (myDictionary[wordToLookup]) {
  console.log(`Meaning: ${myDictionary[wordToLookup]}`);
} else {
  console.log(`"${wordToLookup}" not found in the dictionary.`);
}
