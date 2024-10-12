import React from 'react'
import './Profile.css'
import {useNavigate, NavLink } from 'react-router-dom'

function Profile(props){
  return (
    <div className="profile">
        ADMIN: &nbsp;
        <NavLink className="login_button" to="/admin/stores/all" >Store All</NavLink>&nbsp; | &nbsp;
        <NavLink className="login_button" to="/admin/stores/add" >Store Add</NavLink>&nbsp; | &nbsp;
        <NavLink className="login_button" to="/login" >Login</NavLink>&nbsp; | &nbsp;
        <span>{props.firstname}</span>&nbsp;
        <span>{props.lastname}</span>&nbsp;

    </div>
  )
}

export default Profile