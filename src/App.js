import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuotes(data);
      });
  }, []);

  return (
    <div className="App">
      <div id="quote-box">
        <div id="text">{quotes.length && quotes[currentIndex].text}</div>
        <div id="author">{quotes.length && quotes[currentIndex].author}</div>
        <a id="tweet-code" href="twitter.com/intent/tweet">
          tweet
        </a>
        <button
          id="new-quote"
          onClick={() => {
            setCurrentIndex((prevState) => prevState + 1);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
}
