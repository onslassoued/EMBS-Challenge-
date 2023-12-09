import React, { useEffect, useRef, useState } from 'react'
import PatientsCard from './PatientsCard'
import './css.css'

function PatientsList() {
    const [list, setlist] = useState([
        {
            FullName: ' Ahmed Kahloun',
            Age: 30,
            PhoneNumber: 55503758,
            Gender: 'Male',
            Adress: 'Sousse Sousse',
            Birthdate: '12-2-1993',
            ResponsableNum: 95458752,
            Email: 'Ahmedkahloun@gmail.com',
            Allergies: 'Drug Allergies ',
            Medications: 'Panadol',
            Diangnoses: 'Migraine',
            Comments: 'over weight'
        },
        {
            FullName: ' Nour Laatiri',
            Age: 27,
            PhoneNumber: 54782165,
            Gender: 'Female',
            Adress: 'Monastir',
            Birthdate: '25- 3 - 1996',
            ResponsableNum: 24242424,
            Email: 'Nourlaatiri@gmail.com',
            Allergies: 'nothing ',
            Medications: 'Ciprofloxacin',
            Diangnoses: 'Hypertension',
            Comments: 'The tests indicate that you are dealing with Hypertension .'
        },
        {
            FullName: ' Ons Lassoued',
            Age: 21,
            PhoneNumber: 23065458,
            Gender: 'Female',
            Adress: 'sfax sfax',
            Birthdate: '14 - 7 - 2002',
            ResponsableNum: 21699458,
            Email: 'onslassoued@gmail.com',
            Allergies: 'Food Allergies ',
            Medications: 'Amlodipine',
            Diangnoses: 'Anxiety Disorders',
            Comments: 'nothing special'
        },
        {
            FullName: ' Mouhamed Hinidi',
            Age: 40,
            PhoneNumber: 23854196,
            Gender: 'Male',
            Adress: 'tunis tunis ',
            Birthdate: '15 - 6 - 1983',
            ResponsableNum: 23854196,
            Email: 'mouhamedhinidi@gmail.com',
            Allergies: 'Pet Allergies',
            Medications: 'Metoprolol',
            Diangnoses: 'schizophrenia',
            Comments: 'nothing'
        },
        {
            FullName: 'John Doe',
            Age: 25,
            PhoneNumber: 5551234567,
            Gender: 'Male',
            Address: '123 Main Street, Cityville',
            Birthdate: '5 - 12 - 1998',
            ResponsableNum: 98765432,
            Email: 'john.doe@example.com',
            Allergies: 'Pollen, Peanuts',
            Medications: 'Aspirin, Vitamin C',
            Diagnoses: 'Mild allergies, Vitamin deficiency',
            Comments: 'Regular check-ups needed, overall good health'
        },
        {
            FullName: 'Emily Smith',
            Age: 28,
            PhoneNumber: 5559876543,
            Gender: 'Female',
            Address: '456 Oak Avenue, Townsville',
            Birthdate: '10 - 3 - 1995',
            ResponsableNum: 12345678,
            Email: 'emily.smith@example.com',
            Allergies: 'Shellfish, Dust',
            Medications: 'Ibuprofen, Multivitamins',
            Diagnoses: 'Mild asthma, Seasonal allergies',
            Comments: 'Prefers regular check-ups, follows prescribed medication schedule'
        },
        {
            FullName: 'Alex Johnson',
            Age: 35,
            PhoneNumber: 5555551212,
            Gender: 'Non-binary',
            Address: '789 Pine Street, Riverside',
            Birthdate: '22 - 9 - 1988',
            ResponsableNum: 135792468,
            Email: 'alex.j@example.com',
            Allergies: 'None reported',
            Medications: 'Levothyroxine, Vitamin D',
            Diagnoses: 'Hypothyroidism, Vitamin D deficiency',
            Comments: 'Stays active, maintains a balanced diet, regular thyroid check-ups'
        },
        {
            FullName: 'Samantha Miller',
            Age: 42,
            PhoneNumber: 5556789012,
            Gender: 'Female',
            Address: '321 Maple Lane, Greenwood',
            Birthdate: '8 - 6 - 1981',
            ResponsableNum: 98765432,
            Email: 'samantha.m@example.com',
            Allergies: 'Penicillin, Bee stings',
            Medications: 'Lisinopril, Statin',
            Diagnoses: 'Hypertension, High cholesterol',
            Comments: 'Regular blood pressure monitoring, annual cholesterol tests'
        },
        {
            FullName: 'Michael Anderson',
            Age: 45,
            PhoneNumber: 5552345678,
            Gender: 'Male',
            Address: '567 Cedar Street, Lakeside',
            Birthdate: '17 - 11 - 1978',
            ResponsableNum: 87654321,
            Email: 'michael.a@example.com',
            Allergies: 'Dairy, Latex',
            Medications: 'Metformin, Blood pressure medication',
            Diagnoses: 'Type 2 diabetes, Hypertension',
            Comments: 'Monitors blood sugar levels, regular exercise routine'
        },
        {
            FullName: 'Olivia Taylor',
            Age: 30,
            PhoneNumber: 5558765432,
            Gender: 'Female',
            Address: '789 Pine Avenue, Hilltop',
            Birthdate: '12 - 4 - 1992',
            ResponsableNum: 65432109,
            Email: 'olivia.t@example.com',
            Allergies: 'Pollen, Peanuts',
            Medications: 'Antihistamine, Birth control',
            Diagnoses: 'Seasonal allergies, PCOS',
            Comments: 'Regular gynecological check-ups, manages allergy symptoms'
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
