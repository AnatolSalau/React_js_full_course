import {useLocation} from "react-router-dom";
import queryString from 'query-string';

import patientsData from '../data/patients.json'

import PatientCard from "./PatientCard";


function Patients() {

      const location = useLocation();
      const query = queryString.parse(location.search);
      console.log(query);
      
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