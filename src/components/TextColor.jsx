import React from 'react'
import { useParams } from 'react-router-dom';

const TextColor = ({ setTextColor }) => {
  return (
    <div>
        <h3>בחר את צבע הטקסט</h3>
        <input type="color" onChange={(e)=>{setTextColor(e.target.value)}}/>
    </div>
  )
}

export default TextColor