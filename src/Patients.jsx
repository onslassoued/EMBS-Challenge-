import React from 'react'
import './css.css'
import { useParams } from 'react-router-dom';


function Patients({ list }) {

  const diagnoses = [
    {
      date: "2023-01-15",
      title: "Routine Dental Checkup",
      doctor: "Dentist",
      medicinesGiven: [],
      diseasesUncovered: "No significant findings",
      allergiesUncovered: [],
      note: "Regular dental examination, no issues detected."
    },
    {
      date: "2023-02-05",
      title: "Cardiovascular Health Assessment",
      doctor: "Cardiologist",
      medicinesGiven: ["Aspirin (75mg daily)"],
      diseasesUncovered: "High Blood Pressure",
      allergiesUncovered: [],
      note: "Prescribed aspirin for blood pressure management."
    },
    {
      date: "2023-03-10",
      title: "Vision and Eye Health Checkup",
      doctor: "Ophthalmologist",
      medicinesGiven: ["Eye Drops (for dry eyes)"],
      diseasesUncovered: "Dry Eyes",
      allergiesUncovered: [],
      note: "Advised regular use of eye drops for dry eyes."
    },
    {
      date: "2023-04-20",
      title: "Respiratory Function Test",
      doctor: "Pulmonologist",
      medicinesGiven: ["Inhaler (as needed)"],
      diseasesUncovered: "Mild Asthma",
      allergiesUncovered: ["Dust mites"],
      note: "Prescribed inhaler for asthma management."
    },
    {
      date: "2023-05-15",
      title: "Allergy Testing",
      doctor: "Allergist",
      medicinesGiven: ["Antihistamines"],
      diseasesUncovered: "Allergic Rhinitis",
      allergiesUncovered: ["Pollen", "Pet Dander"],
      note: "Prescribed antihistamines for allergy relief."
    },
    {
      date: "2023-06-08",
      title: "Diabetes Screening",
      doctor: "Endocrinologist",
      medicinesGiven: ["Metformin (500mg daily)"],
      diseasesUncovered: "Type 2 Diabetes",
      allergiesUncovered: [],
      note: "Initiated treatment for diabetes with Metformin."
    },
    {
      date: "2023-07-12",
      title: "Skin Allergy Consultation",
      doctor: "Dermatologist",
      medicinesGiven: ["Topical Steroid Cream"],
      diseasesUncovered: "Eczema",
      allergiesUncovered: ["Nickel allergy"],
      note: "Prescribed a steroid cream for eczema management."
    },
    {
      date: "2023-08-18",
      title: "Gastrointestinal Checkup",
      doctor: "Gastroenterologist",
      medicinesGiven: ["Proton Pump Inhibitor"],
      diseasesUncovered: "Acid Reflux",
      allergiesUncovered: [],
      note: "Prescribed medication for acid reflux."
    },
    {
      date: "2023-09-25",
      title: "Mental Health Assessment",
      doctor: "Psychologist",
      medicinesGiven: ["Antidepressant (as needed)"],
      diseasesUncovered: "Generalized Anxiety Disorder",
      allergiesUncovered: [],
      note: "Recommended therapy and prescribed antidepressant."
    },
    {
      date: "2023-10-30",
      title: "Joint Pain Evaluation",
      doctor: "Rheumatologist",
      medicinesGiven: ["Nonsteroidal Anti-Inflammatory Drug (NSAID)"],
      diseasesUncovered: "Osteoarthritis",
      allergiesUncovered: [],
      note: "Prescribed NSAID for joint pain management."
    }
  ];



  const { id } = useParams();
  console.log(id)
  return (
    <div>
      <h3 className='title'>{list[id].FullName}</h3>
      <div className='Patientinfo'>
        <li> Birthdate : {list[id].Birthdate}</li>
        <li>Phone Number : {list[id].PhoneNumber}</li>
        <li>Responsable Phone Number : {list[id].ResponsableNum}</li>
        <li> Gender : {list[id].Gender}</li>
        <li>Email : {list[id].Email}</li>
      </div>
      <div className='MED'>
        <h3 className='title'>Medicine</h3>
        <div className='medicine'>
          <input type="text" placeholder='Medicine Name' />
          {/* <input type="time" placeholder='Medicine Time' /> */}
          <div className="check">
            <input type="checkbox"  /><p>Morning</p>
            <input type="checkbox" /><p>Midday</p>
            <input type="checkbox" /><p>Evening</p>
            
          </div>
          <input type="number" placeholder='Quantity per dosage' />
          <input type="text" placeholder='Notes' className='comment' />
          <button>+</button>
        </div>
      </div>
      <div className='pat'>
        <h3 className="title">Medical Record</h3>
        <div >
          {diagnoses.map((diagnosis, index) => (
            <div key={index} >
              <h3 className='titlee'>{diagnosis.title}</h3>
              <p><strong>Date:</strong> {diagnosis.date}</p>
              <p><strong>Doctor:</strong> {diagnosis.doctor}</p>
              <p><strong>Medicines Given:</strong> {diagnosis.medicinesGiven.join(', ') || 'None'}</p>
              <p><strong>Diseases Uncovered:</strong> {diagnosis.diseasesUncovered}</p>
              <p><strong>Allergies Uncovered:</strong> {diagnosis.allergiesUncovered.join(', ') || 'None'}</p>
              <p><strong>Note:</strong> {diagnosis.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Patients 
