import React from 'react'
import {Link, useParams } from 'react-router-dom';


const Navigation = () => {

  return (
    <div id='nav'>
        <Link to="/homePage" className='link'>דף הבית<i class="fa-solid fa-house"></i></Link>
        <Link to="/style" className='link'>הגדרות עיצוב<i class="fa-solid fa-palette"></i></Link>
    </div>
  )
}

export default Navigation