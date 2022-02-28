import React, { useState } from "react";
import quotes from "../quotes.json"


const getRandom = () => Math.floor(Math.random() * quotes.length);

const colors = [
  "#845EC2",
  "#D65DB1",
  "#FF6F91",
  "#FF9671",
  "#FFC75F",
  "#F9F871"
];

const Quotes = () => {
    const [quote, setQuote] = useState(quotes[getRandom()]);
    // const quote = quotes[0];
  
    const changeQuotes = () => {
      const random = getRandom();
      setQuote(quotes[random]);
    };
  
    const color = colors[Math.floor(Math.random() * 6)];
  
    document.body.style = `background: ${color}`;
  

    return (
       <div className="card" style={{ color: color }}>
      <h3 className="phrase">
      <i class="fa-solid fa-quote-left"></i>
        {quote.quote}
        <br />
       
      </h3>
      <a className="Author">{quote.author}</a>
      <br />
      <button onClick={changeQuotes} style={{ color: color }}>
      <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
    );
};

export default Quotes;