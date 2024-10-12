import React from 'react'
import './MenuItem.css'

function MenuItem({title, onMenuClick}) {
  return (
    <div className="menuitem" onClick={() =>onMenuClick(title)}>{title}</div>
  )
}

export default MenuItem