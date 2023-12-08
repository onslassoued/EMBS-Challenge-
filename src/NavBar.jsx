import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Patients from './Patients'
import './css.css'
import img from './images/logo.png'


function NavBar() {
    return (
        <div className='navbar'>
            <NavLink to="/" className='logo'>
                <img src={img} ></img>
            </NavLink>
            <ul>
            <NavLink to={'/'}><li className='home'>Home</li></NavLink>
            <NavLink ><li className='about'>About us</li></NavLink>
                <li className='dropdown'>
                    <NavLink to="" className='profil'>Profile</NavLink>
                    <div className='dropdowncontent'>
                        <div className='element'><NavLink to={'/LogIn'} >Log In</NavLink></div>
                        <div className='element'><NavLink >Dashboard</NavLink></div>
                        <div className='element'><NavLink to={'/Patients'} >Patients</NavLink></div>

                    </div>
                </li>
            </ul>
            {/* <Routes>
                <Route path='Patients' element={<Patients></Patients>}></Route>
            </Routes> */}
        </div>
    )
}

export default NavBar
