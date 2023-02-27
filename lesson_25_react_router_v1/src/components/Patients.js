import patientsData from '../data/patients.json'

import PatientCard from "./PatientCard";

function Patients() {
      return (
            <>
                  <h1>Все пациенты:</h1>
                  {
                        patientsData.map((patient => {
                              return <PatientCard key={patient.id}  {...patient}/>
                        }))
                  }
            </>
      );
}

export default Patients