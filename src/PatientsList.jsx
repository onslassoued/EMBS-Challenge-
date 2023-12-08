import React, { useEffect, useRef, useState } from 'react'
import PatientsCard from './PatientsCard'
import './css.css'

function PatientsList() {
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

    const p = useRef()
    const p1 = useRef()
    const p2 = useRef()
    const p3 = useRef()
    const p4 = useRef()

    const add = () => {
        var NewPatient = { FullName: p.current.value, Age: p1.current.value, PhoneNumber: p2.current.value, Gender: p3.current.value, Adress: p4.current.value }
        setlist([...list, NewPatient])
    }


    const [filtredlist, setfilter] = useState(list)
    useEffect(() => {
        setfilter(list)
    }, [list])


    const search = useRef()
    const filtrer = () => {
        setfilter(list.filter(e => e.FullName.toUpperCase().includes(search.current.value.toUpperCase())))
    }

    return (
        <div>
            <div>
                <h3 className='title'>Patients</h3>
                <p className='quote'>" Your dedication transforms each heartbeat into a beacon of signification. keep saving - keep caring " </p>
            </div>
            <div className='searchbox'>
                <input type={'search'} placeholder='Search Patient' ref={search} onChange={filtrer} className='search'></input>
            </div>
            <div className='style'>
                {filtredlist.map((e, index) => <PatientsCard index={index} Patient={e}></PatientsCard>)}
            </div>
        </div>
    )    
}

export default PatientsList
