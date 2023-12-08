import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import './css.css'
import Patients from './Patients';
import PatientsCard from './PatientsCard';
import PatientsList from './PatientsList';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import LogIn from './LogIn';
import Home from './Home';


function App() {
    const [list, setlist] = useState([
        {
            FullName: ' Flen Fouleni',
            Age: 50,
            PhoneNumber: 55555555,
            Gender: 'Male',
            Adress: 'Sousse Sousse'
        },
        {
            FullName: ' Flen Fouleni',
            Age: 42,
            PhoneNumber: 24765130,
            Gender: 'Male',
            Adress: 'Sousse Sousse'
        },
        {
            FullName: ' Flen Fouleni',
            Age: 30,
            PhoneNumber: 23064458,
            Gender: 'Male',
            Adress: 'Sousse Sousse'
        },
        {
            FullName: ' mouhamed',
            Age: 60,
            PhoneNumber: 88888888,
            Gender: 'Male',
            Adress: 'Sousse Sousse'
        },
        {
            FullName: ' mouhaned',
            Age: 30,
            PhoneNumber: 23064458,
            Gender: 'Male',
            Adress: 'Sousse Sousse'
        },
        {
            FullName: ' Flen Fouleni',
            Age: 30,
            PhoneNumber: 23064458,
            Gender: 'Male',
            Adress: 'Sousse Sousse'
        },
        {
            FullName: ' Flen Fouleni',
            Age: 30,
            PhoneNumber: 23064458,
            Gender: 'Male',
            Adress: 'Sousse Sousse'
        },
        {
            FullName: ' Flen Fouleni',
            Age: 30,
            PhoneNumber: 23064458,
            Gender: 'Male',
            Adress: 'Sousse Sousse'
        },
        {
            FullName: ' Flen Foulenin',
            Age: 30,
            PhoneNumber: 23064458,
            Gender: 'Male',
            Adress: 'Sousse Sousse'
        },
        {
            FullName: ' Flen Fouleni',
            Age: 30,
            PhoneNumber: 23064458,
            Gender: 'Male',
            Adress: 'Sousse Sousse'
        }
    ])

  return (
    <div>
      <NavBar></NavBar>
      {/* <Home></Home>
      <LogIn></LogIn> */}
      
      {/* <PatientsList></PatientsList> */}

      <Routes>
        <Route path='Patients' element={<PatientsList></PatientsList>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='Log In ' element={<LogIn></LogIn>}></Route>
        <Route path='Patients/:id' element={<Patients list={list}></Patients>}></Route>
      </Routes>
    </div>
  )
}

export default App;
