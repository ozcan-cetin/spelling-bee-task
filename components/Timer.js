import React, { useEffect } from "react";

const Timer = ({ time, setTime, language }) => {
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time, setTime]);

  return (
    <div className="text-2xl mb-4">
    {time > 0 ? `${language === 'en' ? 'Time Left' : 'Kalan Süre'}: ${time}s` : language === 'en' ? 'Game Over' : 'Oyun Bitti'}
  </div>
    // <div>
    //   {language === "en" ? "Time Left" : "Kalan Zaman"}: {time}{" "}
    //   {language === "en" ? "seconds" : "saniye"}
    // </div>
  );
};

export default Timer;
