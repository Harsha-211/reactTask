import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentColor, setCurrentColor] = useState('white');

  const changeColor = (color) => {
    setCurrentColor(color);
  };

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <div
        className="color-container"
        style={{ backgroundColor: currentColor, width: '500px', height: '500px' }}
      ></div>
      <div className="color-buttons">
        <button onClick={() => changeColor('red')}>Red</button>
        <button onClick={() => changeColor('blue')}>Blue</button>
        <button onClick={() => changeColor('green')}>Green</button>
        <button onClick={() => changeColor('yellow')}>Yellow</button>
        <button onClick={() => changeColor('purple')}>Purple</button>
        <button onClick={() => changeColor('pink')}>Pink</button>
        <button onClick={() => changeColor('orange')}>Orange</button>
        <button onClick={() => changeColor('teal')}>Teal</button>
        <button onClick={() => changeColor('brown')}>Brown</button>
        <button onClick={() => changeColor('black')}>Black</button>
      </div>
    </div>
  );
};

export default App;



