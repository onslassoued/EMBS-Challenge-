import React from 'react'
import './css.css'
import { useParams } from 'react-router-dom';


function Patients({patient }) {
  const { id } = useParams();
  console.log(id)
  return (
    <div>
      <h3 className='test'>{patient[id].FullName}</h3>
      <h2 className='test'>noussaa</h2>
    </div>
  )
}

export default Patients 
