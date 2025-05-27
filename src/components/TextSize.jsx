import React from 'react'
import { useParams } from 'react-router-dom';

const TextSize = ({ setTextSize}) => {
  return (
    <div id='textSize'>
        <h3>בחר את גודל הטקסט</h3>
        <input
        id="myRange"
        type="range"
        min="10"
        max="30"
        onChange={(e) => setTextSize(`${e.target.value}px`)}
      />
    </div>
  )
}

export default TextSize