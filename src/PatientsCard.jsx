import React from 'react'
import { NavLink } from 'react-router-dom'
import'./css.css'

function PatientsCard({Patient , index}) {
  return (
    <div className='card'>
        <NavLink to={'/Patients/'+index}>
      <h3 className='name'>{Patient.FullName}</h3>
      <ul className='informations'>
        <li>Age: {Patient.Age}</li>
        <li>PhoneNumber: {Patient.PhoneNumber}</li>
        <li>Gender: {Patient.Gender}</li>
        <li>Adress: {Patient.Adress}</li>
      </ul>
      </NavLink>
    </div>
  )
}

export default PatientsCard
