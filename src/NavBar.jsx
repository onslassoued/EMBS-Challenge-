import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Patients from './Patients'
import './css.css'
import img from './images/logo.png'


function NavBar() {
    return (
        <div className='navbar'>
            <a href="" className='logo'>
                <img src={img} ></img>
            </a>
            <ul>
            <NavLink to={'/'}><li className='home'>Home</li></NavLink>
            <NavLink ><li className='about'>About us</li></NavLink>
                <li className='dropdown'>
                    <a href="" className='profil'>Profile</a>
                    <div className='dropdowncontent'>
                        <a className='element'><NavLink to={'/LogIn'} >Log In</NavLink></a>
                        <a className='element'><NavLink >Dashboard</NavLink></a>
                        <a className='element'><NavLink to={'/Patients'} >Patients</NavLink></a>

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
