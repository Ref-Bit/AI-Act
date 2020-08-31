import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";
import News from "./components/News";
import Footer from "./components/Footer";

function App() {
  const [articles, setArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALAN_SDK_KEY,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight")
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        else if (command === "open") {
          const parsedNum =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNum - 1];
          if (parsedNum > 20) {
            alanBtn().playText("Please try that again.");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          } else {
            alanBtn().playText("Please try that again...");
          }
        }
      },
    });
    return () => {};
  }, []);
  return (
    <div>
      <div className="header">
        <h1 className="title" onClick={() => window.location.reload()}>
          AI Act
        </h1>
        <p>Click on the microphone button and try the commands below...</p>
      </div>
      <News articles={articles} activeArticle={activeArticle} />
      <Footer />
    </div>
  );
}

export default App;
