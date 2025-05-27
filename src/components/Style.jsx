import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Style = () => {

  return (
    <div id="container">
      <div id='style'>
        <h1>הגדרות עיצוב</h1>
        <button><Link to={"textColor"} className='link-style'>צבע טקסט</Link></button>
        <button><Link to={"textSize"} className='link-style'>גודל טקסט</Link></button>
        <div id='Settings'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default Style