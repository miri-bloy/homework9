import React from 'react'
import {Link, useParams } from 'react-router-dom';


const Navigation = ({setTextColor,setTextSize}) => {

  return (
    <div>
        <Link to="/homePage">דף הבית</Link>
        <Link to={"/style"}>הגדרות עיצוב</Link>
    </div>
  )
}

export default Navigation