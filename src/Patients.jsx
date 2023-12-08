import React from 'react'
import './css.css'
import { useParams } from 'react-router-dom';


function Patients({list}) {
  const { id } = useParams();
  console.log(id)
  return (
    <div>
      <h3 className='test'>{list[id].FullName}</h3>
      <h2 className='test'>noussaa</h2>
    </div>
  )
}

export default Patients 
