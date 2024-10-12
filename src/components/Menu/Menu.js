import React, { useState } from 'react'
import './Menu.css'
import MenuItem from '../MenuItem/MenuItem'


function Menu() {
  const[selecteditem, setSelecteditem] = useState("Fashion"); 

  return (
    <>
    <div className="menucontainer">
        <MenuItem title="Fashion" onMenuClick={setSelecteditem} />
        <MenuItem title="Electronics" onMenuClick={setSelecteditem} />
        <MenuItem title="Home Fittings" onMenuClick={setSelecteditem} />
    </div>
    <span>Selecteditem : {selecteditem}</span>
    </>
  )
}

export default Menu