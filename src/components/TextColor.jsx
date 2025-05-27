import React from 'react'
import { useParams } from 'react-router-dom';

const TextColor = ({ setTextColor, color }) => {
  return (
    <div id='textColor'>
        <h3>בחר את צבע הטקסט</h3>
        <input type="color" onChange={(e)=>{setTextColor(e.target.value)}} value={color}/>
    </div>
  )
}

export default TextColor