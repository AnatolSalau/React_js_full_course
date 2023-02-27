import patientsData from '../data/patients.json'
import Patient from "./Patient";

function Patients() {
      return (
            <>{
                  patientsData.map((patient => {
                        return <Patient key={patient.id} {...patient} />
                  }))
            }

            </>
      );
}

export default Patients