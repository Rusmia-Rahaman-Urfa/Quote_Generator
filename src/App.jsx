import React from 'react';
import './assets/components/quotesApi';
import QuoteGenerator from "./assets/components/QuoteGenerator";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Random Quote Generator</h1>
      </header>
      <main>
        <QuoteGenerator />
      </main>
    </div>
  );
}

export default App;