import React, { useState } from "react";
import { fetchRandomQuote } from "./quotesApi";

function QuoteGenerator() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGetQuote = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await fetchRandomQuote();
      setQuote(data);
    } catch (err) {
      setError("Could not load quote. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="quote-container">
      <button onClick={handleGetQuote} disabled={loading}>
        {loading ? "Loading..." : "Get Random Quote"}
      </button>

      {quote && (
        <div className="quote-display">
          <p className="quote-text">"{quote.quote}"</p>
          <p className="quote-author">— {quote.author}</p>
        </div>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default QuoteGenerator;
