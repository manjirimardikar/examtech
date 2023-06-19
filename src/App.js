import React, { useState } from 'react';

const options = [
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' }
];

function App() {
  const [selectedColor, setSelectedColor] = useState('');
  const [text, setText] = useState('');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const letterCount = text.trim().length;

  return (
    <div className="App">
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text"
        style={{ color: selectedColor }}
      />

      <select onChange={handleColorChange}>
        {options.map((option, index) => (
          <option
            key={index}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      <p>Letter Count: {letterCount}</p>
    </div>
  );
}

export default App;

