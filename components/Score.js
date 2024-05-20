import React from "react";

const Score = ({ score, language }) => {
  return (
    <div className="text-2xl mt-4">
      {language === "en" ? "Score" : "Puan"}: {score}
    </div>
  );
};

export default Score;
