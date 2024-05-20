import React, { useState } from 'react';

const Hive = ({ letters, onSubmit, language }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input.toLowerCase());
    setInput('');
  };

  return (
    <div className="mb-4">
      <div className="flex justify-center space-x-4 mb-4">
        {letters.map((letter, index) => (
          <div key={index} className="text-2xl font-bold p-2 bg-gray-200 rounded">
            {letter}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex justify-center">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          className="p-2 border rounded"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
          {language === 'en' ? 'Submit' : 'Gönder'}
        </button>
      </form>
    </div>
  );
};
export default Hive;
