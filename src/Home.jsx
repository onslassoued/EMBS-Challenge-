import React from 'react'
import img2 from './images/logoheartsremoved.png'

function Home() {
  return (
    <div>
      <div className='intro'>
        <div className='image'>
        <img src={img2}></img>
        </div>
        <h3>Prioritize wellness, and let health be your greatest asset.</h3>
        <p  >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta repudiandae tenetur sapiente atque tempore mollitia dolorem dolorum? Quia adipisci maxime assumenda sed maiores veritatis, laboriosam quos dolore, aut ipsa neque.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className='grid'>
        <div className='global'>
          <h3> Your trusted supervisor for a healthier tomorrow.</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus architecto incidunt, consectetur quasi quas nulla asperiores blanditiis, alias sint fugit tempore dignissimos voluptate totam! Nisi earum laboriosam consequatur rerum sunt.</p>
          <img src={img2}></img>
        </div>
        <div className='box'>
          <div className='Patients'>
            <h4>For Patients</h4>
            <p>Empower your well-being with our latest analyses and up-to-date healthcare solutions.</p>
          </div>
          <div className='Doctors'>
            <h4>For Doctors</h4>
            <p>Effortlessly manage your schedule, connect with patients seamlessly, and prioritize excellent care.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
