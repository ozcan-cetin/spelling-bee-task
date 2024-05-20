import React, { useState, useEffect } from "react";
import Hive from "./Hive";
import Timer from "./Timer";
import Score from "./Score";
import LanguageSwitcher from "./LanguageSwitcher";

const GameBoard = ({ language }) => {
  const [letters, setLetters] = useState([]);
  const [dictionary, setDictionary] = useState([]);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);

//   useEffect(() => {
//     fetch("/dictionaries/tr.json")
//       .then((response) => response.json())
//       .then((data) => {
//         setDictionary(data.words);
//         setLetters(generateRandomLetters(data.words));
//       });
//   }, [score]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch("/api/dictionaries");
        const response = await fetch(`/api/dictionaries?lang=${language}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setDictionary(data.words);
        setLetters(generateRandomLetters(data.words));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [score]);

  const generateRandomLetters = (words) => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord
      .split("")
      .sort(() => 0.5 - Math.random())
      .slice(0, 7);
  };

  const handleWordSubmission = (word) => {
    if (dictionary.includes(word)) {
      setScore((prevScore) => prevScore + word.length);
      setTime((prevTime) => prevTime + 15);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-center">
    <LanguageSwitcher />
    <h1 className="text-4xl font-bold mb-4">{language === 'en' ? 'Spelling Bee Game' : 'Heceleme Oyunu'}</h1>
    <Timer time={time} setTime={setTime} language={language} />
    <Hive letters={letters} onSubmit={handleWordSubmission} language={language} />
    <Score score={score} language={language} />
  </div>
    // <div className="text-center bg-red-100">
    //   <LanguageSwitcher />
    //   <h1>{language === "en" ? "Spelling Bee Game" : "Heceleme Oyunu"}</h1>
    //   <Timer time={time} setTime={setTime} language={language}/>
    //   <Hive letters={letters} onSubmit={handleWordSubmission} language={language} />
    //   <Score score={score} language={language}/>
    // </div>
  );
};

export default GameBoard;
