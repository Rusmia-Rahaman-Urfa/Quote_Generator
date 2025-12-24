// src/services/quotesApi.js

/**
 * Fetches a random quote from a public API.
 * We are using DummyJSON because it's reliable for practice.
 */
export const fetchRandomQuote = async () => {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");

    // Check if the response is successful (status 200)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    // The component expects an object with 'quote' and 'author'.
    // DummyJSON returns { id, quote, author }, so this matches perfectly.
    return data;
  } catch (error) {
    console.error("Error fetching quote:", error);
    throw error; // Pass the error back to the UI to handle
  }
};