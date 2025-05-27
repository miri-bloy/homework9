import React from 'react'

const HomePage = ({ textColor, textSize }) => {
  return (
    <div id="container">
      <div id='homePage'>
        <h1>דף הבית</h1>
        <p style={{ color: textColor, fontSize: textSize }}>טקסט בהתאמה אישית
          <br />
          תוכלו לשנות את הצבע והגודל בהגדרות העיצוב
        </p>
      </div>
    </div>
  )
}

export default HomePage