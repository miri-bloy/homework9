import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Style = ({setTextColor,setTextSize}) => {

  return (
    <div>
      <h1>הגדרות עיצוב</h1>
      <Link to={"textColor"}>צבע טקסט</Link>
      <Link to={"textSize"}>גודל טקסט</Link>

      <Outlet></Outlet>
    </div>
  )
}

export default Style